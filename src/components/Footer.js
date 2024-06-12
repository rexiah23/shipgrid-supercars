import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                <div className={styles.centeredSection}>
                    <div className={styles.logoArea}>
                        <img src="/White logo - no background.png" alt="Logo" className={styles.logo} />
                        <div className={styles.contactInfo}>
                            <p>
                                📞 <a href="tel:+16476777891" className={styles.contactLink}>647-677-7891</a>
                            </p>
                            <p>
                                📧 <a href="mailto:admin@shipgrid.io" className={styles.contactLink}>admin@shipgrid.io</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.linksArea}>
                    <div className={styles.linkSection}>
                        <h3>Company</h3>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/faq">FAQ</a>
                    </div>
                    <div className={styles.linkSection}>
                        <h3>Customer Service</h3>
                        <a href="/track">Track My Vehicle</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className={styles.rightsReserved}>
                <p>© 2024 ShipGrid Solutions Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
