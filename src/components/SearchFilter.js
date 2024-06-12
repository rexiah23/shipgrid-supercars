// src/components/Inventory/SearchFilter.js
import React from 'react';
import styles from './SearchFilter.module.css';

const SearchFilter = ({ brands, selectedBrand, onSelectBrand }) => {
    return (
        <div className={styles.searchContainer}>
            {brands.map((brand) => (
                <div
                    key={brand.name}
                    className={`${styles.brand} ${selectedBrand === brand.name ? styles.selected : ''}`}
                    onClick={() => onSelectBrand(brand.name)}
                >
                    <img src={brand.logo} alt={brand.name} className={styles.logo} />
                    <span className={styles.brandName}>{brand.name}</span>
                </div>
            ))}
        </div>
    );
};

export default SearchFilter;
