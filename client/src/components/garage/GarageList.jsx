import GarageItem from "./GarageItem";
import styles from "./GarageList.module.css"

export default function GarageList() {
    return (
        <>
            <div className="absolute w-full bg-gray-900/70">
                <div className={styles["garage-grid"]}>
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                    <GarageItem />
                </div>
            </div>

        </>
    );
};