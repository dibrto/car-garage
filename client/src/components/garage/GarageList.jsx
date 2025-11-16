import { useEffect, useState } from "react";

import styles from "./GarageList.module.css"
import GarageItem from "./GarageItem";
import FetchData from "../../utils/api";
import Loader from "../Loader/Loader";

export default function GarageList() {
    // const [loading, setLoading] = useState(false);
    const [garages, setGarages] = useState([]);

    useEffect(() => {
        // on mount
        // setLoading(true);

        const abortController = new AbortController();
        FetchData("garages?load=author%3D_ownerId%3Ausers", abortController.signal)
            .then(result => setGarages(result))
            .catch(() => {})
            // .finally(() => setLoading(false));
        
        // on unmount
        return () => abortController.abort();
    }, []);


    return (
        <>
            
            {/* {loading && <Loader />} */}

            <div className="absolute min-h-full w-full bg-gray-900/70">
                <div className={styles["garage-grid"]}>
                    {garages.map(garage => <GarageItem key={garage._id} garageData={garage}/>)}
                </div>
            </div>
            
        </>
    );
};