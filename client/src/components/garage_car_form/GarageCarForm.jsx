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
                {/* <p className={styles.subtitle}>Personalize</p> */}

                <form className={styles.form} action={submitHandler}>
                    <label className={styles.label}>
                        Email
                        <input
                            type="email"
                            className={styles.input}
                            {...regField("email")}
                            autoComplete="email"
                            placeholder="you@example.com"
                            required
                        />
                    </label>

                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            className={styles.input}
                            {...regField("password")}
                            autoComplete="current-password"
                            placeholder="••••••••"
                            required
                        />
                    </label>
                   
                    <button type="submit" className={styles.submit}>Create</button>
                </form>                
            </div>
        </div>
    );
};