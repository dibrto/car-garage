import { useEffect, useState } from "react";
import styles from "./GarageDetails.module.css";
import FetchData from "../../utils/api";
import { useParams } from "react-router";

export default function GarageDetails(/*{ user, cars }*/) {
    const {garageId} = useParams();
    const [data, setData] = useState({author: {}, cars: []});

    useEffect(() => {
        FetchData(`garages/${garageId}?load=author%3D_ownerId%3Ausers`)
            .then(setData);

        }, [garageId]);
        
    return (

        <div className="absolute min-h-full w-full bg-gray-900/70">
            <div className={styles.container}>
                {/* PROFILE HEADER */}
                <div className={styles.profileCard}>
                    <img 
                        className={styles.avatar} 
                        src={data.author.profilePicture}
                        alt={`${data.author.username} profile picture`}
                    />

                    <div className={styles.profileInfo}>
                        <h2>{data.author.username}</h2>
                        <p>{data.cars.length} cars in garage</p>
                    </div>
                </div>

                {/* CARS SECTION */}
                <div className={styles.carsGrid}>
                    {data.cars.map((car) => (
                        <div key={car.model_id} className={styles.carCard}>
                            <img 
                                src={car.model_imageUrl}
                                alt={car.model_make_id}
                                className={styles.carImage}
                            />

                            <div className={styles.carInfo}>
                                <h3>{car.model_make_id} {car.model_name}</h3>

                                <ul className={styles.specList}>
                                    <li><strong>Year:</strong> {car.model_year}</li>
                                    <li><strong>Trim:</strong> {car.model_trim}</li>
                                    <li><strong>Power:</strong> {car.model_engine_power_ps} HP</li>
                                    <li><strong>Fuel:</strong> {car.model_engine_fuel}</li>
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
