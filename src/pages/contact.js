import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <h1>Contact Us</h1>
          <main>
            <ContactForm />
          </main>
        </div>
    );
}

export default ContactPage;
