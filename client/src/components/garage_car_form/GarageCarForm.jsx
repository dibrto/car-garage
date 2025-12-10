import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

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
    const {data, regField, setData } = useForm(initVals);
    const { fetchData } = useFetch();
    const navigate = useNavigate();    

    // edit car 
    useEffect(() => {
        if (!carId) {
            return;
        }

        fetchData("data", `garages/${garageId}`)
            .then(response => {
                const car = response.cars.find(c => c.model_id === carId);
                const vals = {
                    year: car.model_year
                    , make: car.model_make_id
                    , model: car.model_name
                    , model_id: car.model_id
                    , imageUrl: car.model_imageUrl
                };
                
                setData(vals);
            });
    }, [carId, fetchData, garageId, setData]);
   
    const prepareCarData = async () => {     
        if (!data.model_id){
            toast.error("Fill all required fields");
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

        return reqData;
    };

    const editCarHandler = async (e) => {
        e.preventDefault();
        const reqData = await prepareCarData();
        if (!reqData){
            return;
        }

        const garage = await fetchData("data", `garages/${garageId}`);
        const updatedCars = garage.cars.map(car => car.model_id === carId ? reqData : car);
        garage.cars = updatedCars;

        await fetchData("data", `garages/${garageId}`, "PUT", garage);
        toast.success("Car edited successfully");
        navigate(`/garages/${garageId}`);
    };

    const addCarHandler = async (e) => {
        e.preventDefault();
        const reqData = await prepareCarData();
        if (!reqData){
            return;
        }
        
        const garage = await fetchData("data", `garages/${garageId}`);
        garage.cars.push(reqData);
        
        await fetchData("data", `garages/${garageId}`, "PUT", garage);
        toast.success("Car added successfully");
        navigate(`/garages/${garageId}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-xl">
            <h2 className="text-center text-2xl font-semibold text-white mb-6">Choose your car</h2>
            <form onSubmit={!carId ? addCarHandler : editCarHandler}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <YearDropdown regField={regField("year")} setData={setData} />

                    <MakeDropdown regField={regField("make")} setData={setData} year={data.year} />

                    <ModelDropdown regField={regField("model")} setData={setData} year={data.year} make={data.make} />
                    
                    <TrimDropdown regField={regField("model_id")} year={data.year} make={data.make} model={data.model} />
                </div>

                <label className="block text-white pt-5">
                    Image
                    <input 
                        className="w-full p-3 bg-white/10 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1" 
                        {...regField("imageUrl")}
                    />

                </label>

                <button type="submit" className="bg-white-8pers text-white mt-5 p-3 px-8 rounded-xl cursor-pointer">{!carId ? "Add car" : "Edit car"}</button>
            </form>

        </div>
    );
};