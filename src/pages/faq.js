import FAQ from '../components/FAQ';

const FaqPage = () => {
    return (
      <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
        <h1>Frequently Asked Questions</h1>
        <main>
          <FAQ />
        </main>
      </div>
    );
}

export default FaqPage;
