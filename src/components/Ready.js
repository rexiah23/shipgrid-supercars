// src/components/ShippingMap.js
import BookCallCTA from './BookCallCTA';
import styles from './Ready.module.css'; // Assuming you use CSS Modules

const ReadyToCall = () => {
    return (
        <div className={styles.container}>
            <h2>READY TO IMPORT YOUR NEXT SUPERCAR?</h2>
            <BookCallCTA position='center'/> 
        </div>
    );
};

export default ReadyToCall;
