import React, { useEffect, useState, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import styles from './Hero.module.css';

const BookCallCTA = React.lazy(() => import('./BookCallCTA'));
const ViewInventoryCTA = React.lazy(() => import('./ViewInventoryCTA'));

const Hero = ({ isMobile }) => {
    const words = ["smartest", "safest", "cheapest"];
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            setCurrentWord(words[currentIndex]);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <LazyLoad height={200} offset={100}>
                <video className={styles.gif} autoPlay loop muted playsInline>
                    <source src="./hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </LazyLoad>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.h1}>
                        Get Your Next Supercar For 30% Off
                        {/* The 
                        <br/>
                        <span className={styles.dynamicWordContainer}>
                            <span className={styles.dynamicWord}>{currentWord}</span>
                        </span>
                        <div>way to get your&nbsp;</div>next supercar */}
                    </h1>
                    <ul className={styles.ul}>
                        <li>Imported from South Korea</li>
                        <li>Custom Cleared & Ready to Drive</li>
                        <li>Inspect With Your Mechanic Before Paying</li>
                    </ul>
                </div>
                <div style={{ marginTop: "-20px" }}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <BookCallCTA size={isMobile ? 'sm' : 'lg'} position={isMobile ? "center" : "flex-start"} style={{ margin: '20px' }} />
                        <ViewInventoryCTA size={isMobile ? 'sm' : 'lg'} position={isMobile ? "center" : "flex-start"} style={{ margin: '20px', marginTop: '10px' }} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Hero;
