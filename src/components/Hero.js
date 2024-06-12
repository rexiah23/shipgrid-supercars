// src/components/Hero.js
import Link from 'next/link';
import styles from './Hero.module.css'; // Assuming you use CSS Modules

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Get Your Next Supercar For 30% Off</h1>
                <p>Imported from South Korea. Fully Custom Cleared.</p>
                <Link href="/inventory">
                    <button className={styles.ctaButton} >VIEW INVENTORY</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
