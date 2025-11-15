import GarageItem from "./GarageItem";
import styles from "./GarageList.module.css"

export default function GarageList() {
    return (
        <>
            <div className="absolute inset-0 h-full w-full bg-gray-900/70"></div>

            <div className={styles["garage-grid"]}>
                <GarageItem />
            </div>            
        </>
    );
};