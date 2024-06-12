// src/components/ShippingMap.js
import styles from './ShippingMap.module.css'; // Assuming you use CSS Modules

const ShippingMap = () => {
    return (
        <div className={styles.container}>
            <h2>WE IMPORT & SHIP CANADA-WIDE</h2>
            <img src="/canada-map.png" alt="Map of Canada" className={styles.map} />
            <p>FROM VANCOUVER, CALGARY, EDMONTON, REGINA AND WINNIPEG TO TORONTO, MONTREAL, HALIFAX, AND ANYWHERE IN BETWEEN</p>
            <button className={styles.button}>LEARN MORE</button>
        </div>
    );
};

export default ShippingMap;
