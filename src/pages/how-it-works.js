import HowItWorks from '../components/HowItWorks';
import TabComponent from '@/components/TabComponent';
import FAQ from '@/components/FAQ';
import BookCallCTA from '@/components/BookCallCTA';

const HowItWorksPage = () => {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
            <h1>How It Works</h1>
            <main>
                {/* <HowItWorks /> */}
                <TabComponent />
                <BookCallCTA />
                <FAQ />
            </main>
        </div>
    );
};

export default HowItWorksPage;
