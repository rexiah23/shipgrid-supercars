import { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu' 
import styles from './Header.module.css'
import useMediaQuery from '@mui/material/useMediaQuery'     
import AccessTimeIcon from '@mui/icons-material/AccessTime' 
import EmailIcon from '@mui/icons-material/Email'           
import PhoneIcon from '@mui/icons-material/Phone'      

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

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
        <div style={{ width: '100%' }}>
          <nav style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Link className={styles.link} href="/" style={{ color: 'white', padding: '8px' }} onClick={closeMenu}>HOME</Link>
            <Link className={styles.link} href="/how-it-works" style={{ color: 'white', padding: '8px' }} onClick={closeMenu}>HOW IT WORKS</Link>
            <Link className={styles.link} href="/inventory" style={{ color: 'white', padding: '8px' }} onClick={closeMenu}>INVENTORY</Link>
            <Link className={`${styles.link} ${styles.specialLink}`} href="https://calendly.com/shipgrid/supercar-import-discovery-call" style={{ color: 'white', padding: '8px' }} onClick={closeMenu} target="_blank">GET YOUR SUPERCAR</Link>
            <Link className={styles.link} href="/faq" style={{ color: 'white', padding: '8px' }} onClick={closeMenu}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

const HeaderDesktop = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black' }}> 

      <div style={{ display: 'flex', color: 'white', width: '50%', justifyContent: 'space-between', padding: '18px 0' }}> 

        <div style={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          <AccessTimeIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '5px' }} />
          <span>Mon-Fri 9am-5pm PST</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
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

      <header style={{ display: 'flex', width: '50%', color: 'white', justifyContent: 'space-between', padding: '18px 0', paddingBottom: '18px' }}>
        <div className={'logo'}>
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
            GET YOUR SUPERCAR
          </Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
        </nav>

      </header>

    </div>
  )
}

const Header = () => {
  const isMobile = useMediaQuery('(max-width:768px)') // Media query hook

  if (isMobile) {
    return <HeaderMobile />
  }

  return <HeaderDesktop />
}

export default Header
