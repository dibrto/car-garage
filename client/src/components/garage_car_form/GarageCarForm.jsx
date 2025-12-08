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
    , trim: ""
};

// TODO: make request to car query api
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

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-30 p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-center text-2xl font-semibold text-white mb-6">Select a car</h2>
            <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <YearDropdown regField={{...regField("year")}} />

                <MakeDropdown regField={regField("make")} year={data.year} />

                <ModelDropdown regField={regField("model")} year={data.year} make={data.make} />

                <TrimDropdown regField={regField("trim")} year={data.year} make={data.make} model={data.model} />

                <button type="submit" className="bg-amber-50">Submit</button>
            </form>

        </div>
    );
};