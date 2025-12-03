import styles from "./GarageDetails.module.css";
import { Link, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import useUser from "../../hooks/useUser";

export default function GarageDetails(/*{ user, cars }*/) {
    const { garageId } = useParams();
    const { data, fetchData, setData } = useFetch("data", `garages/${garageId}`, { author: {}, cars: [] });
    const { user } = useUser();

    const deleteCarHandler = async (carModelId) => {
        const isConfirmed = confirm("Do you want to delete the car ?");

        if (!isConfirmed) {
            return;
        }

        const garage = await fetchData("data", `garages/${garageId}`);

        garage.cars = garage.cars.filter(car => car.model_id !== carModelId);
        
        await fetchData("data", `garages/${garageId}`, "PATCH", {cars: garage.cars});

        setData(garage);
    };

    return (
        <div className={styles["container"]}>
            {/* PROFILE HEADER */}
            <div className={styles["profile-card"]}>
                <img
                    className={styles["avatar"]}
                    src={data.profilePicture}
                    alt={`${data.username} profile picture`}
                />

                <div className={styles["profile-info"]}>
                    <div className="pb-5">
                        <h2>{data.username}</h2>
                        <p>{data.cars.length} cars in garage</p>
                    </div>
                    { user?._garageId === garageId 
                        && (
                            <div className="flex gap-5">
                                {/* <button className={styles["edit-profile-btn"]}>Edit profile</button> */}
                                <Link to={`/garages/${garageId}/car/add`} className={styles["edit-profile-btn"]}>Add car</Link>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* CARS SECTION */}
            <div className={styles["cars-grid"]}>
                {data.cars.map((car) => (
                    <div key={car.model_id} className={styles["car-card"]}>
                        <img
                            src={car.model_imageUrl}
                            alt={car.make_display}
                            className={styles["car-image"]}
                            onError={(e) => e.target.src = "https://www.motozite.com/assets/front/images/No-Image.jpg"}
                        />

                        <div className={styles["car-info"]}>
                            <h3>{car.make_display} {car.model_name}</h3>

                            <ul className={styles["spec-list"]}>
                                <li><strong>Year:</strong> {car.model_year}</li>
                                <li><strong>Trim:</strong> {car.model_trim}</li>
                                <li><strong>Country:</strong> {car.make_country}</li>
                                {/* <li><strong>Power:</strong> {car.model_engine_power_ps} HP</li>
                                <li><strong>Fuel:</strong> {car.model_engine_fuel}</li> */}
                            </ul>

                            <div className="flex gap-5">
                                <Link to={`/garages/${garageId}/car/${car.model_id}/edit`} className={styles["edit-profile-btn"]}>Edit car</Link>
                                <button type="button" className={styles["edit-profile-btn"]} onClick={() => deleteCarHandler(car.model_id)}>Delete car</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
