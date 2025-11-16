import { useEffect, useState } from "react";

import styles from "./GarageList.module.css"
import GarageItem from "./GarageItem";
import FetchData from "../../utils/api";

export default function GarageList() {
    const [garages, setGarages] = useState([]);

    useEffect(() => {
        // on mount
        const abortController = new AbortController();
        FetchData("garages", abortController.signal)
            .then(result => setGarages(result));
        
        // on unmount
        return () => abortController.abort();
    }, []);


    return (
        <>
            <div className="absolute min-h-full w-full bg-gray-900/70">
                <div className={styles["garage-grid"]}>
                    {garages.map(garage => <GarageItem key={garage._id} garageData={garage}/>)}
                </div>
            </div>
        </>
    );
};