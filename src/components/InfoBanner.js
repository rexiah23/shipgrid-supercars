// src/components/InfoBanner.js
import styles from './InfoBanner.module.css';

const InfoBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerInner}>
                <div className={styles.left}>
                    <div className={styles.label}> 🕒 Mon-Fri 9am-5pm PST</div>
                </div>
                <div className={styles.right}>
                    <a href="mailto:ADMIN@SHIPGRID.IO" className={styles.label}> ADMIN@SHIPGRID.IO </a>
                    <div className={styles.label}> +1 647-677-7891</div>
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;
