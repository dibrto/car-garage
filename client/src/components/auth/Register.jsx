import { Link } from "react-router";
import styles from "./AuthForm.module.css";

export default function Register() {
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>
                <p className={styles.subtitle}>Sign up to create your own car garage</p>

                <form className={styles.form}>
                    <label className={styles.label}>
                        Email
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="you@example.com"
                            required
                            autoComplete="email"
                        />
                    </label>

                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
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