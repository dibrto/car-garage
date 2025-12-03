import styles from "./GarageList.module.css"
import GarageItem from "./GarageItem";
import useFetch from "../../hooks/useFetch";
import useUser from "../../hooks/useUser";

export default function GarageList() {
    const { data: garages } = useFetch("data", "garages", []);
    const { user } = useUser();


    const filteredGarages = user ? garages.filter(g => g._ownerId !== user._id) : garages;

    return (
        <div className={styles["garage-grid"]}>
            {filteredGarages.map(garage => <GarageItem key={garage._id} garageData={garage}/> )}
        </div>
    );
};