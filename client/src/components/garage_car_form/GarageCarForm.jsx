import { useNavigate, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import YearDropdown from "./YearDropdown";

const initVals = {
    year: ""
};

// TODO: make request to car query api
export default function GarageCarForm(){
    const { garageId, carId } = useParams();
    const {data, regField} = useForm(initVals);
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

                <YearDropdown regField={regField("year")} />

                {/* Make */}
                <div>
                    <div className="block text-white/80 mb-1">Make</div>
                    <select
                        // value={make}
                        // onChange={(e) => setMake(e.target.value)}
                        className="w-full p-3 bg-white/10 text-white rounded-xl 
                                   border border-white/10 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-500">
                        <option value="" className="text-black">---</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Mercedes</option>
                    </select>
                </div>

                {/* Model */}
                <div>
                    <div className="block text-white/80 mb-1">Model</div>
                    <select
                        // value={model}
                        // onChange={(e) => setModel(e.target.value)}
                        className="w-full p-3 bg-white/10 text-white rounded-xl 
                                   border border-white/10 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-500">
                        <option value="" className="text-black">---</option>
                        <option>A4</option>
                        <option>A6</option>
                    </select>
                </div>

                {/* Trim */}
                <div>
                    <div className="block text-white/80 mb-1">Trim</div>
                    <select
                        // value={trim}
                        // onChange={(e) => setTrim(e.target.value)}
                        className="w-full p-3 bg-white/10 text-white rounded-xl 
                                   border border-white/10 focus:outline-none 
                                   focus:ring-2 focus:ring-blue-500">
                        <option value="" className="text-black">---</option>
                        <option>Base</option>
                        <option>Sport</option>
                        <option>Premium</option>
                    </select>
                </div>

                <button type="submit" className="bg-amber-50">Submit</button>
            </form>

        </div>
    );
};