// src/components/HowItWorks/HowItWorks.js
import Link from 'next/link';
import styles from './HowItWorks.module.css'; // Assuming you use CSS Modules

const HowItWorks = () => {
    return (
        <div className={styles.container}>
            <p>If you want to import a Korean supercar to Canada and save up to 30% the equivalent market price in Canada, you can follow this step-by-step guide.</p>
            <h2>In short:</h2>
            <ol className={styles.list}>
                <li className={styles.listItem}>Let us know the vehicle you want.</li>
                <li className={styles.listItem}>We will visit the vehicle and send you live videos + photos.</li>
                <li className={styles.listItem}>We will arrange a full pre-purchase inspection at the official manufacturer dealership in Seoul, South Korea.</li>
                <li className={styles.listItem}>If you like the PPI results, place a deposit with Shipgrid KDM Auto Imports.</li>
                <li className={styles.listItem}>
                    Initiate a Standby Letter of Credit (SBLC) with your bank to pay for the rest of the vehicle. 
                    (<Link href="/faq#what-is-sblc">What is this?</Link>)
                </li>
                <li className={styles.listItem}>We will inspect, ship, custom clear, and deliver your vehicle to your doorstep.</li>
                <li className={styles.listItem}>Once the vehicle arrives at your door, your bank will release the funds to us, and you will receive all ownership documentation and keys.</li>
            </ol>
        </div>
    );
};

export default HowItWorks;

