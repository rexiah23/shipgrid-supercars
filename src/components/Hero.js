import styles from './Hero.module.css'; 
import BookCallCTA from './BookCallCTA';

const Hero = ({ isMobile }) => {
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
                <div style={{ marginTop: "-20px"}}>
                    <BookCallCTA size={isMobile ? 'sm' : 'lg'} position="flex-start" style={{ margin: '20px' }}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
