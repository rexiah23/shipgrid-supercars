// src/components/Inventory/Inventory.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Inventory.module.css';
import SearchFilter from './SearchFilter';
import { 
    brands,
    vehicles
} from '../../data/vehicles';

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
          <SearchFilter
            brands={brands}
            selectedBrand={selectedBrand}
            onSelectBrand={handleSelectBrand}
          />
          <div className={styles.cardsContainer}>
            {filteredVehicles.map((vehicle) => (
              <Link key={vehicle.id} className={styles.card} href={`/vehicle/${vehicle.id}`} passHref>
                <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} className={styles.image} />
                <div className={styles.details}>
                  <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                  <p>KMs: {vehicle.kms}</p>
                  <p>Price: {vehicle.price}</p>
                  <p>Lowest Canadian Price: {vehicle.canadianPrice}</p>
                  <p>Savings: {vehicle.savings}</p>
                  <p>{vehicle.description}</p>
                  <span className={styles.link}>View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
    );
};

export default Inventory;
