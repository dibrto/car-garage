import styles from "./GarageList.module.css"
import GarageItem from "./GarageItem";
import useFetch from "../../hooks/useFetch";

export default function GarageList() {
    const { data: garages } = useFetch("data", "garages?load=author%3D_ownerId%3Ausers", []);
    
    return (
        <div className={styles["garage-grid"]}>
            {garages.map(garage => <GarageItem key={garage._id} garageData={garage}/>)}
        </div>
    );
};