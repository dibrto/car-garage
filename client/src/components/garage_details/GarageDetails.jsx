import styles from "./GarageDetails.module.css";

    const user = {
        name: "Daniel Bratov",
        avatar: "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg"
    };

    // --- HARDCODED CARS ---
    const cars = [
        {
            id: 1,
            brand: "Audi",
            model: "A3",
            year: 2022,
            engine: "2.0 TFSI",
            hp: 190,
            fuel: "Petrol",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Audi_A8_D5_%282021%29_1X7A6342.jpg"
        },
    ]

export default function GarageDetails(/*{ user, cars }*/) {
    return (

        <div className="absolute min-h-full w-full bg-gray-900/70">
            <div className={styles.container}>            
                {/* PROFILE HEADER */}
                <div className={styles.profileCard}>
                    <img 
                        className={styles.avatar} 
                        src={user.avatar || "/default-profile.png"} 
                        alt="avatar" 
                    />

                    <div className={styles.profileInfo}>
                        <h2>{user.name}</h2>
                        <p>{cars.length} cars in garage</p>
                    </div>
                </div>

                {/* CARS SECTION */}
                <div className={styles.carsGrid}>
                    {cars.map((car) => (
                        <div key={car.id} className={styles.carCard}>
                            <img 
                                src={car.image} 
                                alt={car.model}
                                className={styles.carImage}
                            />

                            <div className={styles.carInfo}>
                                <h3>{car.brand} {car.model}</h3>

                                <ul className={styles.specList}>
                                    <li><strong>Year:</strong> {car.year}</li>
                                    <li><strong>Engine:</strong> {car.engine}</li>
                                    <li><strong>Power:</strong> {car.hp} HP</li>
                                    <li><strong>Fuel:</strong> {car.fuel}</li>
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
