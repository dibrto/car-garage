import styles from "./GarageItem.module.css"

export default function GarageItem() {
    return (
        <div className={styles["garage-card"]}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Audi_A8_D5_%282021%29_1X7A6342.jpg" className={styles["garage-cover"]} />

            <div className={styles["garage-content"]}>
                <div className={styles["garage-user"]}>
                    <img src="https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg" className={styles["garage-avatar"]} />
                    <div>
                        <h3 className={styles["garage-username"]}>Daniel Bratov</h3>
                        <p className={styles["garage-count"]}>7 cars in garage</p>
                    </div>
                </div>

                <p className={styles["garage-last"]}>Last added: BMW M4 Competition</p>

                <div className={styles["garage-btn-group"]}>
                    <button className={styles["garage-btn"]}>View Garage</button>
                    <button className={styles["garage-btn"]}>Like Garage</button>
                </div>
            </div>
        </div>
    );
};