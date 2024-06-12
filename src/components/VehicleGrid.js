// src/components/VehicleGrid.js
import styles from './VehicleGrid.module.css'; // Assuming you use CSS Modules
import Link from 'next/link';
import { vehicles } from '../../data/vehicles';

const VehicleGrid = () => {
    // Limit the number of vehicles to 8
    const limitedVehicles = vehicles.slice(0, 4);

    return (
        <div className={styles.gridContainer}>
            <h2 className={styles.title}>Featured Vehicles</h2>
            <div className={styles.grid}>
                {limitedVehicles.map((vehicle) => (
                    <div key={vehicle.id} className={styles.card}>
                        <Link href={`/vehicle/${vehicle.id}`} className={styles.linkWrapper} passHref>
                            <img src={vehicle.image} alt={vehicle.model} className={styles.image} />
                        </Link>
                        <div className={styles.info}>
                            <h3>{vehicle.make} {vehicle.model}</h3>
                            <p>{vehicle.year}</p>
                            <p>{vehicle.kms} KM</p>
                            <p className={styles.price}>{vehicle.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/inventory" passHref className={styles.ctaButton}>
                VIEW INVENTORY
            </Link>
        </div>
    );
};

export default VehicleGrid;
