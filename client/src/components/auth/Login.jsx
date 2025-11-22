import { Link } from "react-router";
import styles from "./AuthForm.module.css";

export default function Login() {
    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.subtitle}>Sign in to your car garage</p>

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
                            autoComplete="current-password"
                        />
                    </label>

                    <div className={styles.row}>
                        {/* <label className={styles.checkboxLabel}> */}
                        {/* <input type="checkbox" className={styles.checkbox} />
                    Remember me
                    </label> */}

                        <button
                            type="button"
                            className={styles.linkButton}
                        // тук по-късно можеш да закачиш onClick
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button type="submit" className={styles.submit}>
                        Sign in
                    </button>
                </form>

                <p className={styles.footerText}>
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className={styles.link}>Register</Link>
                </p>
            </div>
        </div>
    );
};