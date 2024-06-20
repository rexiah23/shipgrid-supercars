import { useState } from 'react';
import styles from './Inventory.module.css';
import SearchFilter from './SearchFilter';
import { brands, vehicles } from '../../data/vehicles'
import VehicleCard from './VehicleCard'

const Inventory = () => {
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleSelectBrand = (brand) => {
        if (selectedBrand === brand) {
            setSelectedBrand(''); // Clear the selection if the same brand is clicked
        } else {
            setSelectedBrand(brand);
        }
    };

    const filteredVehicles = selectedBrand
        ? vehicles.filter(vehicle => vehicle.make.toLowerCase() === selectedBrand.toLowerCase())
        : vehicles;

    return (
        <div className={styles.container}>
          <p className={styles.matchingCount}>{filteredVehicles.length} Vehicles Matching</p>
          <SearchFilter
            brands={brands}
            selectedBrand={selectedBrand}
            onSelectBrand={handleSelectBrand}
          />
          <div className={styles.cardsContainer}>
            {filteredVehicles.map((vehicle) => (
              <VehicleCard vehicle={vehicle} />
            ))}
          </div>
        </div>
    );
};

export default Inventory;
