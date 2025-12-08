import { useNavigate, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import YearDropdown from "./YearDropdown";
import MakeDropdown from "./MakeDropdown";
import ModelDropdown from "./ModelDropdown";
import TrimDropdown from "./TrimDropdown";

const initVals = {
    year: ""
    , make: ""
    , model: ""
    , model_id: ""
    , imageUrl: ""
};

export default function GarageCarForm(){
    const { garageId, carId } = useParams();
    const {data, regField } = useForm(initVals);
    const { fetchData } = useFetch();
    const navigate = useNavigate();    

    // // edit car 
    // useEffect(() => {
    //     if (!carId) {
    //         return;
    //     }

    //     fetchData("data", `garages/${garageId}`)
    //         .then(response => {
    //             const car = response.cars.find(c => c.model_id === carId);
    //             setData(car);
    //         });
    // }, [carId, fetchData, garageId, setData]);

    // add car handler
    const AddCarHandler = async () => {
        const garage = await fetchData("data", `garages/${garageId}`);
        garage.cars.push(data);

        await fetchData("data", `garages/${garageId}`, "PUT", garage);
        navigate(`/garages/${garageId}`);
    };

    // edit car handler
    const EditCarHandler = async () => {
        const garage = await fetchData("data", `garages/${garageId}`);
        const updatedCars = garage.cars.map(car => car.model_id === carId ? data : car);
        garage.cars = updatedCars;

        await fetchData("data", `garages/${garageId}`, "PUT", garage);
        navigate(`/garages/${garageId}`);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!data.model_id){
            return;
        }

        if (!data.imageUrl){
            data.imageUrl = "https://www.motozite.com/assets/front/images/No-Image.jpg";
        }

        const response = await fetchData("carQuery", `car-info?model=${data.model_id}`);
        const carInfo = response[0];

        const reqData = {
            "model_id": data.model_id,
            "model_imageUrl": data.imageUrl,
            "model_make_id": carInfo.model_make_id,
            "model_name": carInfo.model_name,
            "model_trim": carInfo.model_trim,
            "model_year": carInfo.model_year,
            "make_display": carInfo.make_display,
            "make_country": carInfo.make_country
        };
        const garage = await fetchData("data", `garages/${garageId}`);
        garage.cars.push(reqData);
        console.log(garage.cars);
        
        await fetchData("data", `garages/${garageId}`, "PUT", garage);
        navigate(`/garages/${garageId}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-center text-2xl font-semibold text-white mb-6">Choose your car</h2>
            <form onSubmit={submitHandler}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <YearDropdown regField={{...regField("year")}} />

                    <MakeDropdown regField={regField("make")} year={data.year} />

                    <ModelDropdown regField={regField("model")} year={data.year} make={data.make} />
                    
                    <TrimDropdown regField={regField("model_id")} year={data.year} make={data.make} model={data.model} />
                </div>

                <label className="block text-white pt-5">
                    Image
                    <input 
                        className="w-full p-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1" 
                        {...regField("imageUrl")}
                    />

                </label>

                <button type="submit" className="bg-white-8pers text-white mt-5 p-3 px-8 rounded-xl cursor-pointer">Add car</button>
            </form>

        </div>
    );
};