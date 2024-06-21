import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import styles from './Footer.module.css';
import BookCallCTA from './BookCallCTA';
import useMediaQuery from '@mui/material/useMediaQuery'     

const FooterMobile = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.logoArea}>
          <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px' }} />
        </div>
        <div className={styles.contactInfo}>
          <p>
            <PhoneIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="tel:+16476777891" className={styles.contactLink}>647-677-7891</a>
          </p>
          <p>
            <EmailIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <a href="mailto:admin@shipgrid.io" className={styles.contactLink}>admin@shipgrid.io</a>
          </p>
        </div>
        <div className={styles.linksArea} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className={styles.linkSection}>
            <h3>Company</h3>
            {/* <a href="/about">About Us</a> */}
            {/* <a href="/contact">Contact Us</a> */}
            <a href="/faq">FAQ</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          {/* <div className={styles.linkSection}>
            <h3>Customer Service</h3>
            <a href="/track">Track My Vehicle</a>
            <a href="/contact">Contact</a>
          </div> */}
        </div>
        <div className={styles.ctaSection}>
          <BookCallCTA style={{ width:'300px', fontSize: '0.9rem'}}/>
        </div>
        <div className={styles.locationSection}>
          <h3>Our Offices</h3>
          <p><strong>Canada:</strong> 809 - 9099 Cook Road, Richmond BC, Canada, V6Y 0G5</p>
          <p><strong>South Korea:</strong> 87-6, Jangjamaeul 8 danjibuyeongapat 801-810, Geumcheon-dong, Sangdang-gu Cheongju-si, Chungcheongbuk-do</p>
        </div>
        <div className={styles.rightsReserved}>
          <p>© 2024 ShipGrid Solutions Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const FooterDesktop = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1f1f1f', color: 'white', paddingTop: '36px' }}>
      <footer style={{ display: 'flex', flexDirection: 'column', marginLeft: '124px', marginRight: '124px', alignItems: 'space-between' }}>


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div>
              <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px' }} /> 
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <p style={{ marginBottom: '-8px'}}> 
                <PhoneIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <a href="tel:+16476777891" className={styles.contactLink}>647-677-7891</a>
            </p>
            <p>
                <EmailIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                <a href="mailto:admin@shipgrid.io" className={styles.contactLink}>admin@shipgrid.io</a>
            </p>
          </div>

          </div>

          <div style={{ display: 'flex', marginLeft: '125px' }}>
            <div className={styles.linkSection} style={{ display: 'flex', flexDirection: 'column', marginRight: '125px'}}>
            <h3>Company</h3>
              {/* <a href="/about">About Us</a> */}
            {/* <a href="/contact">Contact Us</a> */}
            <a href="/faq">FAQ</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            </div>
            {/* <div className={styles.linkSection} style={{ display: 'flex', flexDirection: 'column'}}>
              <h3>Customer Service</h3>
              <a href="/track">Track My Vehicle</a>
              <a href="/contact">Contact</a>
            </div> */}
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={styles.linkSection} style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Our Offices</h3>
            <p><strong>Canada:</strong> 809 - 9099 Cook Road, Richmond BC, Canada, V6Y 0G5</p>
            <p><strong>South Korea:</strong> 87-6, Jangjamaeul 8 danjibuyeongapat 801-810, Geumcheon-dong, Sangdang-gu Cheongju-si, Chungcheongbuk-do</p>
          </div>

          <div style={{ alignSelf: 'center', marginLeft: '125px'}}>
            <BookCallCTA />
          </div>

        </div>
        <div className={styles.rightsReserved}>
          <p>© 2024 ShipGrid Solutions Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:768px)') // Media query hook

  if (isMobile) {
    return <FooterMobile />
  }

  return <FooterDesktop />
}
export default Footer
