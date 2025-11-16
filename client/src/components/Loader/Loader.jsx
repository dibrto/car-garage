import styles from "./Loader.module.css"

export default function Loader() {
    return (
        <div id="loader" className={styles["modal"]}>
            <div className={`${styles["half-circle-spinner"]} ${styles["loader"]}`}>
                <div className={`${styles["loader-circle"]} ${styles["circle-1"]}`}></div>
                <div className={`${styles["loader-circle"]} ${styles["circle-2"]}`}></div>
            </div>
        </div>
    );
};