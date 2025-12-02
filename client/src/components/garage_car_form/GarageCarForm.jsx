import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import styles from "./GarageCarForm.module.css"

const initVals = {
    model_make_id : ""
    , model_name : ""
    , model_trim : ""
    , model_year : ""
    , model_engine_power_ps : ""
    , model_engine_fuel : ""
    , model_imageUrl : ""
};

// TODO: make request to car query api
export default function GarageCarForm(){
    const { garageId, carId } = useParams(); 
    const {data, setData, regField} = useForm(initVals);
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
                setData(car);
            });
    }, [carId, fetchData, garageId, setData]);

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

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>{!carId ? "Add" : "Edit"} car</h1>
                <p className={styles.subtitle}>
                    { !carId 
                        ? "Create and add new car to your garage"
                        : "Edit selected car from your garage"
                    }</p>

                <form className={styles.form} action={!carId ? AddCarHandler : EditCarHandler}>
                    <label className={styles.label}>
                        Brand
                        <input type="text" className={styles.input} {...regField("model_make_id")} required />
                    </label>

                    <label className={styles.label}>
                        Model
                        <input type="text" className={styles.input} {...regField("model_name")} required />
                    </label>

                    <label className={styles.label}>
                        Trim
                        <input type="text" className={styles.input} {...regField("model_trim")} required />
                    </label>

                    <label className={styles.label}>
                        Year
                        <input type="text" className={styles.input} {...regField("model_year")} required />
                    </label>

                    <label className={styles.label}>
                        Horse power
                        <input type="text" className={styles.input} {...regField("model_engine_power_ps")} required />
                    </label>

                    <label className={styles.label}>
                        Engine fuel
                        <input type="text" className={styles.input} {...regField("model_engine_fuel")} required />
                    </label>

                    <label className={styles.label}>
                        Image URL
                        <input type="text" className={styles.input} {...regField("model_imageUrl")} required />
                    </label>
                   
                    <button type="submit" className={styles.submit}>{!carId ? "Add" : "Edit"}</button>
                </form>                
            </div>
        </div>
    );
};