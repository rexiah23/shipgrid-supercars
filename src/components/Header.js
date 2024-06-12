import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import InfoBanner from './InfoBanner';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <InfoBanner />
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <img src="/White logo - no background.png" alt="Logo" style={{ height: '65px' }} />
          </Link>
        </div>
        <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu} className={styles.link}>HOME</Link>
          <Link href="/inventory" onClick={closeMenu} className={styles.link}>INVENTORY</Link>
          <Link href="/how-it-works" onClick={closeMenu} className={styles.link}>HOW IT WORKS</Link>
          <Link href="https://calendly.com/shipgrid/supercar-import-discovery-call" passHref target="_blank" onClick={closeMenu} className={styles.link}>BOOK A CALL</Link>
          <Link href="/contact" onClick={closeMenu} className={styles.link}>CONTACT US</Link>
          <Link href="/faq" onClick={closeMenu} className={styles.link}>FAQ</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
