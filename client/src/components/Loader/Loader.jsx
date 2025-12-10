import useLoader from "../../hooks/useLoader";
import styles from "./Loader.module.css"

export default function Loader() {
    const { isLoading } = useLoader();

    return (
        isLoading
        && (
            <div id="loader" className={styles["modal"]}>
                <div className={`${styles["half-circle-spinner"]} ${styles["loader"]}`}>
                    <div className={`${styles["loader-circle"]} ${styles["circle-1"]}`}></div>
                    <div className={`${styles["loader-circle"]} ${styles["circle-2"]}`}></div>
                </div>
            </div>
        )
    );
};