import styles from "./GarageList.module.css"
import GarageItem from "./GarageItem";
import useFetch from "../../hooks/useFetch";
import useUser from "../../hooks/useUser";

export default function GarageList() {
    const { data: garages } = useFetch("data", "garages?load=author%3D_ownerId%3Ausers", []);
    const { user } = useUser();
    
    return (
        <div className={styles["garage-grid"]}>
            {garages.map(garage => user._id !== garage._ownerId && <GarageItem key={garage._id} garageData={garage}/> )}
        </div>
    );
};