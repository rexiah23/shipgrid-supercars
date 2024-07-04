import React, { useEffect, useRef, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import styles from './Hero.module.css';
import BookCallCTA from './BookCallCTA';
import ViewInventoryCTA from './ViewInventoryCTA';

// const BookCallCTA = React.lazy(() => import('./BookCallCTA'));
// const ViewInventoryCTA = React.lazy(() => import('./ViewInventoryCTA'));

const Hero = ({ isMobile }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => {
                console.log('Auto-play was prevented:', error);
            });
        }
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <LazyLoad height={200} offset={100}>
                <video 
                    className={styles.gif} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    ref={videoRef}
                >
                    <source src="/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </LazyLoad>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.h1}>
                        Get Your Next Supercar For 30% Off
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
