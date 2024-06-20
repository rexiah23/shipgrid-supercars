import React from 'react';
import cssStyles from './BookCallCTA.module.css';
import clsx from 'clsx'; // Import clsx to conditionally apply classes

const BookCallCTA = ({ text, style, position = 'center', size = 'md' }) => {
    const handleClick = () => {
        window.open('https://calendly.com/shipgrid/supercar-import-discovery-call?month=2024-06', '_blank');
    };

    return (
        <div className={cssStyles.buttonContainer} style={{ justifyContent: position }}>
            <button
                className={clsx(cssStyles.button, cssStyles[size])} // Conditionally apply size class
                onClick={handleClick}
                style={style}
            >
                {text || 'GET YOUR SUPERCAR'}
            </button>
        </div>
    );
};

export default BookCallCTA;
