import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import ContactUsModal from './ContactForm'; // Import the modal component
import styles from './Header.module.css';

const MenuIcon = lazy(() => import('@mui/icons-material/Menu'));
const AccessTimeIcon = lazy(() => import('@mui/icons-material/AccessTime'));
const EmailIcon = lazy(() => import('@mui/icons-material/Email'));
const PhoneIcon = lazy(() => import('@mui/icons-material/Phone'));

const HeaderMobile = ({ handleOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !burgerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '18px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <PhoneIcon onClick={() => window.location.href = 'tel:+16476777891'} style={{ marginRight: '10px', cursor: 'pointer' }} />
            <EmailIcon onClick={() => window.location.href = 'mailto:admin@shipgrid.io'} style={{ cursor: 'pointer' }} />
          </Suspense>
        </div>

        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
          <Link href="/">
            <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px', marginLeft: '-15px' }} />
          </Link>
        </div>

        <div onClick={toggleMenu} ref={burgerRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <MenuIcon style={{ color: 'white' }} />
          </Suspense>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} style={{ width: '100%' }}>
          <nav style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Link className={styles.link} href="/" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>HOME</Link>
            <Link className={styles.link} href="/how-it-works" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>HOW IT WORKS</Link>
            <Link className={styles.link} href="/inventory" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>INVENTORY</Link>
            <Link 
              href="https://calendly.com/shipgrid/supercar-import-discovery-call" 
              passHref 
              target="_blank" 
              className={`${styles.link} ${styles.specialLink}`} // Use both styles for consistent styling
              onClick={(e) => { 
                handleOpenModal(); 
                setTimeout(() => {
                  window.open('https://calendly.com/shipgrid/supercar-import-discovery-call', '_blank');
                }, 100); // Small delay to ensure the modal opens first
              }}
            >
              BOOK A CALL
            </Link>
            <Link className={styles.link} href="/faq" style={{ color: 'white', padding: '4px' }} onClick={closeMenu}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeaderDesktop = ({ handleOpenModal }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black' }}>
      <div style={{ display: 'flex', color: 'white', justifyContent: 'center', padding: '18px 0', marginRight: '40px' }}>
        <div style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none', paddingRight: '320px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <AccessTimeIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
          </Suspense>
          <span>Mon-Fri 9am-5pm PST</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '100px' }}>
          <a href="mailto:admin@shipgrid.io" style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <EmailIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
            </Suspense>
            <span> ADMIN@SHIPGRID.IO </span>
          </a>

          <div style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <PhoneIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
            </Suspense>
            +1 647-677-7891
          </div>
        </div>
      </div>

      <header style={{ display: 'flex', color: 'white', justifyContent: 'space-between', padding: '18px 0', paddingBottom: '18px' }}>
        <div className={'logo'} style={{ marginRight: '40px' }}>
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
            onClick={(e) => { 
              handleOpenModal(); 
              setTimeout(() => {
                window.open('https://calendly.com/shipgrid/supercar-import-discovery-call', '_blank');
              }, 100); // Small delay to ensure the modal opens first
            }}
          >
            BOOK A CALL
          </Link>

          <Link href="/faq" className={styles.link}>FAQ</Link>
          {/* <div className={styles.link} onClick={handleOpenModal}>Contact Us</div> */}
        </nav>
      </header>
    </div>
  );
};


const Header = ({ isMobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <HeaderMobile handleOpenModal={handleOpenModal} /> : <HeaderDesktop handleOpenModal={handleOpenModal} />}
      </Suspense>
      {/* <ContactUsModal open={isModalOpen} handleClose={handleCloseModal} /> */}
    </>
  );
};

export default Header;
