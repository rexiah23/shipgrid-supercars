import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu' 
import styles from './Header.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime' 
import EmailIcon from '@mui/icons-material/Email'           
import PhoneIcon from '@mui/icons-material/Phone'      

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '18px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
          <PhoneIcon onClick={() => window.location.href = 'tel:+16476777891'} style={{ marginRight: '10px', cursor: 'pointer' }} />
          <EmailIcon onClick={() => window.location.href = 'mailto:admin@shipgrid.io'} style={{ cursor: 'pointer' }} />
        </div>

        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
          <Link href="/">
            <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px' }} />
          </Link>
        </div>

        <div onClick={toggleMenu}>
          <MenuIcon style={{ color: 'white' }} />
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} style={{ width: '100%' }}>
          <nav style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Link className={styles.link} href="/" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>HOME</Link>
            <Link className={styles.link} href="/how-it-works" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>HOW IT WORKS</Link>
            <Link className={styles.link} href="/inventory" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>INVENTORY</Link>
            <Link className={`${styles.link} ${styles.specialLink}`} href="https://calendly.com/shipgrid/supercar-import-discovery-call" style={{ color: 'white', padding: '10px' }} onClick={closeMenu} target="_blank">START PURCHASE</Link>
            <Link className={styles.link} href="/faq" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

const HeaderDesktop = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black' }}> 
    
      <div style={{ display: 'flex', color: 'white', justifyContent: 'center', padding: '18px 0', marginRight: '40px'}}> 


        <div style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none', paddingRight: '320px' }}>
          <AccessTimeIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
          <span>Mon-Fri 9am-5pm PST</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '100px' }}>
          <a href="mailto:admin@shipgrid.io" style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            <EmailIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
            <span> ADMIN@SHIPGRID.IO </span>
          </a>

          <div style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            <PhoneIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
            +1 647-677-7891
          </div>
        </div>

      </div>

      <header style={{ display: 'flex', color: 'white', justifyContent: 'space-between', padding: '18px 0', paddingBottom: '18px' }}>
        <div className={'logo'} style={{ marginRight: '40px'}}>
          <Link href="/">
            <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px' }} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>HOME</Link>
          <Link href="/how-it-works" className={styles.link}>HOW IT WORKS</Link>
          <Link href="/inventory" className={styles.link}>INVENTORY</Link>
          <Link 
            href="https://calendly.com/shipgrid/supercar-import-discovery-call" 
            passHref 
            target="_blank" 
            className={`${styles.link} ${styles.specialLink}`} // Use both styles for consistent styling
          >
            START PURCHASE
          </Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
        </nav>

      </header>

    </div>
  )
}

const Header = ({ isMobile }) => {
  if (isMobile) {
    return <HeaderMobile />
  }

  return <HeaderDesktop />
}

export default Header
