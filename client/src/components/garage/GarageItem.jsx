import styles from "./GarageItem.module.css"

export default function GarageItem({garageData}){
    const {
        _id
        , _ownerId
        , garageCover
        , author
        , cars
    } = garageData;
    const lastCar = cars.at(-1);

    return (
        <div className={styles["garage-card"]}>
            <img src={garageCover} className={styles["garage-cover"]} />

            <div className={styles["garage-content"]}>
                <div className={styles["garage-user"]}>
                    <img src={author.profilePicture} alt={`${author.username} profile picture`} className={styles["garage-avatar"]} />
                    <div>
                        <h3 className={styles["garage-username"]}>{author.username}</h3>
                        <p className={styles["garage-count"]}>{cars.length} cars in garage</p>
                    </div>
                </div>

                <p className={styles["garage-last"]}>Last added:
                    { lastCar
                      ? ` ${lastCar?.model_make_id} ${lastCar?.model_name}`
                      : " - "
                    }
                </p>

                <div className={styles["garage-btn-group"]}>
                    <button className={styles["garage-btn"]}>View Garage</button>
                    <button className={styles["garage-btn"]}>Like Garage</button>
                </div>
            </div>
        </div>
    );
};