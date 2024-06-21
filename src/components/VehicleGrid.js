// src/components/VehicleGrid.js
import styles from './VehicleGrid.module.css'; // Assuming you use CSS Modules
import Link from 'next/link';
import VehicleCard from './VehicleCard';

const VehicleGrid = ({ vehicles, isMobile }) => {
    const limitedVehicles = isMobile ? vehicles.slice(0, 2) : vehicles.slice(0, 8);

    return (
        <div className={styles.gridContainer}>
            <h2 className={styles.title}>Featured Vehicles</h2>
            <div style={{ display: 'flex', marginBottom: '18px', flexDirection: isMobile ? 'column' : 'row'}}>
                {limitedVehicles.map((vehicle) => (
                    <VehicleCard vehicle={vehicle}/>
                ))}
            </div>
            <Link href="/inventory" passHref className={styles.ctaButton}>
                VIEW INVENTORY
            </Link>
        </div>
    );
};

export default VehicleGrid;
