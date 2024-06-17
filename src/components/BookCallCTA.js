import React from 'react';
import cssStyles from './BookCallCTA.module.css';

const BookCallCTA = ({ text, style, position = 'left' }) => {
    const handleClick = () => {
        window.open('https://calendly.com/shipgrid/supercar-import-discovery-call?month=2024-06', '_blank');
    };

    return (
        <div className={cssStyles.buttonContainer}>
            <button className={cssStyles.button} onClick={handleClick} style={style}>
                {text || 'GET YOUR SUPERCAR'}
            </button>
        </div>
    );
};

export default BookCallCTA;
