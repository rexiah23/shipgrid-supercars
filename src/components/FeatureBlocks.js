import Link from 'next/link';
import styles from './FeatureBlocks.module.css'; // Assuming you use CSS Modules

const FeatureBlocks = () => {;

    return (
        <div className={styles.container}>
            <Link href="/inventory" passHref className={styles.feature} style={{ backgroundImage: 'url(/blue_murci.png)' }}>
                <span className={styles.text}>BROWSE OUR INVENTORY</span>
            </Link>
            <Link href="/procurement" passHref className={styles.feature} style={{ backgroundImage: 'url(/blue_murci.png)' }}>
                <span className={styles.text}>LET US FIND A SUPERCAR FOR YOU</span>
            </Link>
        </div>
    );
};

export default FeatureBlocks;
