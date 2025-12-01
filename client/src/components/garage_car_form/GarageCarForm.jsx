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

export default function GarageCarForm(){
    const { garageId } = useParams(); 
    const {data, regField} = useForm(initVals);
    const { fetchData } = useFetch();
    const navigate = useNavigate();

    const submitHandler = async () => {
        const garage = await fetchData("data", `garages/${garageId}`);

        garage.cars.push(data);

        await fetchData("data", `garages/${garageId}`, "PUT", garage);

        navigate(`/garages/${garageId}`);
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Create car</h1>
                <p className={styles.subtitle}>Create and add car to your garage</p>

                <form className={styles.form} action={submitHandler}>
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
                   
                    <button type="submit" className={styles.submit}>Create</button>
                </form>                
            </div>
        </div>
    );
};