import ContactForm from "@/components/ContactForm";

const ProcurementPage = () => {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <h1>Let Us Find Your Next Supercar</h1>
          <p>We will go through our dealer network and email you the best condition and best priced vehicle offers.</p>
          <main>
            <ContactForm />
          </main>
        </div>
    );
}

export default ProcurementPage;
