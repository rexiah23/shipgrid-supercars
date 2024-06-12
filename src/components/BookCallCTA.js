import React from 'react';
import styles from './BookCallCTA.module.css';

const BookCallCTA = () => {
    const handleClick = () => {
        window.open('https://calendly.com/shipgrid/supercar-import-discovery-call?month=2024-06', '_blank');
    };

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleClick}>
                Book A Call
            </button>
        </div>
    );
};

export default BookCallCTA;
