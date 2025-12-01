import useForm from "../../hooks/useForm";
import styles from "./GarageCarForm.module.css"

const initVals = {};

export default function GarageCarForm(){
    const {data, regField} = useForm(initVals);

    const submitHandler = () => {
        console.log(data);
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