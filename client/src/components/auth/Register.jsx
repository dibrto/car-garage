import { Link } from "react-router";
import styles from "./AuthForm.module.css";
import useForm from "../../hooks/useForm";
import useUser from "../../hooks/useUser";

const initVals = {
    email : ""
    , password: ""
    , rePassword: ""
}

export default function Register() {
    const { regField, data } = useForm(initVals);
    const { register } = useUser();
    
    const submitHandler = () => {
        const { email, password, rePassword, username } = data;

        if (email === "" || password === "" || rePassword === ""){
            alert("Fill all fields");
            return;
        }

        if (password != rePassword){
            alert("Passwords don't match");
            return;
        }

        register({ email, password, username });
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>
                <p className={styles.subtitle}>Sign up to create your own car garage</p>

                <form className={styles.form} action={submitHandler}>
                    <label className={styles.label}>
                        Email
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="you@example.com"
                            {...regField("email")}
                            required
                            autoComplete="email"
                        />
                    </label>

                    <label className={styles.label}>
                        Username
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="John Doe"
                            {...regField("username")}
                            required
                            autoComplete="username"
                        />
                    </label>

                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            {...regField("password")}
                            required
                            autoComplete="new-password"
                        />
                    </label>

                    <label className={styles.label}>
                        Confirm Password
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            {...regField("rePassword")}
                            required
                            autoComplete="re-password"
                        />
                    </label>

                    <button type="submit" className={styles.submit}>
                        Sign up
                    </button>
                </form>

                <p className={styles.footerText}>
                    Already have an account?{" "}
                    <Link to="/login" className={styles.link}>Login</Link>
                </p>
            </div>
        </div>
    );
};