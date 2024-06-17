import Link from 'next/link';
import styles from './Hero.module.css'; 

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.h1}>Get Your Next Supercar For 30% Off</h1>
                    <ul className={styles.ul}>
                        <li>Imported from South Korea</li>
                        <li>Custom Cleared & Ready to Drive</li>
                        <li>Inspect With Your Mechanic Before Paying</li>
                    </ul>
                </div>
                <div>
                    <Link href="/inventory">
                        <button className={styles.ctaButton}>VIEW INVENTORY</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Hero;


