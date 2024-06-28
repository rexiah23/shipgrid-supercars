import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css'; 
import BookCallCTA from './BookCallCTA';
import ViewInventoryCTA from './ViewInventoryCTA';

const Hero = ({ isMobile }) => {
    const words = ["Smartest", "Safest", "Cheapest"];
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            setCurrentWord(words[currentIndex]);
        }, 6000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <img className={styles.gif} src="./hero.gif" alt="Hero GIF" />
            <div className={styles.content}>
                <div>
                    <h1 className={styles.h1}>
                        The 
                        <br/>
                        <span className={styles.dynamicWordContainer}>
                            <span className={styles.dynamicWord}>{currentWord}</span>
                        </span>
                        <div>way to get your&nbsp;</div>next supercar
                    </h1>
                    <ul className={styles.ul}>
                        <li>Imported from South Korea</li>
                        <li>Custom Cleared & Ready to Drive</li>
                        <li>Inspect With Your Mechanic Before Paying</li>
                    </ul>
                </div>
                <div style={{ marginTop: "-20px"}}>
                    <BookCallCTA size={isMobile ? 'sm' : 'lg'} position="flex-start" style={{ margin: '20px' }}/>
                    <ViewInventoryCTA size={isMobile ? 'sm' : 'lg'} position="flex-start" style={{ margin: '20px', marginTop: 'px' }}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
