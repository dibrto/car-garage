import styles from "./GarageDetails.module.css";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useUser from "../../hooks/useUser";

export default function GarageDetails(/*{ user, cars }*/) {
    const { garageId } = useParams();
    const { data } = useFetch("data", `garages/${garageId}?load=author%3D_ownerId%3Ausers`, { author: {}, cars: [] });
    const { user } = useUser();

    return (
        <div className={styles["container"]}>
            {/* PROFILE HEADER */}
            <div className={styles["profile-card"]}>
                <img
                    className={styles["avatar"]}
                    src={data.author.profilePicture}
                    alt={`${data.author.username} profile picture`}
                />

                <div className={styles["profile-info"]}>
                    <div className="flex gap-5">
                        <h2>{data.author.username}</h2>
                        { user?._garageId === garageId && <button className={styles["edit-profile-btn"]}>Edit profile</button> }
                    </div>
                    <p>{data.cars.length} cars in garage</p>
                </div>
            </div>

            {/* CARS SECTION */}
            <div className={styles["cars-grid"]}>
                {data.cars.map((car) => (
                    <div key={car.model_id} className={styles["car-card"]}>
                        <img
                            src={car.model_imageUrl}
                            alt={car.model_make_id}
                            className={styles["car-image"]}
                        />

                        <div className={styles["car-info"]}>
                            <h3>{car.model_make_id} {car.model_name}</h3>

                            <ul className={styles["spec-list"]}>
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
    );
}
