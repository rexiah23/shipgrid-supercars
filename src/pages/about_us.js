import React from 'react';
import PageBanner from '../components/PageBanner';
import TeamSection from '../components/TeamSection';
import MissionVision from '../components/MissionVision';

const AboutUsPage = () => {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1600px' }}>
            <PageBanner title="About Us" subtitle="Learn more about Shipgrid Solutions Inc." />
            <main>
                <section style={{ margin: '40px 0' }}>
                    <h2>Our Story</h2>
                    <p>
                        Shipgrid Solutions Inc. was founded with the vision of bringing high-performance supercars to enthusiasts in Canada. 
                        Our journey began in South Korea, where we established strong connections with dealers and manufacturers. 
                        Today, we pride ourselves on offering the best deals, secure payment methods, and a transparent buying process.
                    </p>
                </section>
                <MissionVision />
                <TeamSection />
            </main>
        </div>
    );
};

export default AboutUsPage;
