// src/components/ShippingMap.js
import BookCallCTA from './BookCallCTA';
import styles from './Ready.module.css'; // Assuming you use CSS Modules

const ReadyToCall = () => {
    return (
        <div className={styles.container}>
            <h2>ARE YOU READY TO IMPORT YOUR NEXT SUPERCAR FOR 30% OFF?</h2>
            <BookCallCTA position='center'/> 
        </div>
    );
};

export default ReadyToCall;
