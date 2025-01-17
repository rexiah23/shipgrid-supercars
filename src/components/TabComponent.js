import { useState } from 'react';
import styles from './TabComponent.module.css';
import Steps from './Steps';

const steps = {
  Cash: [
    { number: 1, title: 'Choose Your Vehicle', description: 'Let us know which vehicle you want.' },
    { number: 2, title: 'Inspection', description: 'We\'ll evaluate the vehicle with our in-house mechanic and send you the results.' },
    { number: 3, title: 'Payment', description: 'If you want to buy the vehicle, wire ShipGrid Solutions the full purchase price.' },
    { number: 4, title: 'We Ship and Clear Your Car', description: 'We\'ll deliver the vehicle to your doorstep and handle all customs clearance and registration.' },
    { number: 5, title: 'Decide If You Want to Keep the Car', description: 'Inspect the vehicle with your mechanic once it arrives at your home. Then decide whether to keep or reject it.' },
    { number: 6, title: 'Finalize Purchase', description: 'If you accept the vehicle, receive the vehicle\'s keys, title, and all ownership documents.' },
    { number: 7, title: 'Return Policy', description: 'If you reject the vehicle, you\'ll receive a full refund minus shipping and customs clearance fees.' },
  ],
  Escrow: [
    { number: 1, title: 'Choose Your Vehicle', description: 'Let us know which vehicle you want.' },
    { number: 2, title: 'Inspection', description: 'We\'ll evaluate the vehicle with our in-house mechanic and send you the results.' },
    { number: 3, title: 'Wire Deposit', description: 'If you want to buy the vehicle, wire Shipgrid Supercar Imports a small deposit to secure it.' },
    { number: 4, title: 'Sign Escrow Agreement', description: 'Sign the Escrow.com agreement and send the remaining funds. Escrow.com will hold your funds until you approve its release.' },
    { number: 4, title: 'We Ship and Clear Your Car', description: 'We\'ll deliver the vehicle to your doorstep and handle all customs clearance and registration.' },
    { number: 6, title: 'Decide If You Want to Keep the Car', description: 'Inspect the vehicle with your mechanic once it arrives at your home. Then decide whether to keep or reject it.' },
    { number: 7, title: 'Finalize Purchase', description: 'If you accept the vehicle, instruct Escrow.com to release the funds to us, and you\'ll receive the vehicle\'s keys, title, and all ownership documents.' },
    { number: 8, title: 'Return Policy', description: 'If you reject the vehicle, you\'ll receive a full refund minus shipping and customs clearance fees.' },  
  ],
  // LetterOfCredit: [
  //   { number: 1, title: 'Select Your Supercar', description: 'Inform us about the supercar you wish to purchase.' },
  //   { number: 2, title: 'Inspection and PPI', description: 'We conduct an onsite inspection and provide detailed videos and results. Optionally, you can request a Pre-Purchase Inspection (PPI) at an official dealership in Seoul, such as Lamborghini Seoul or Ferrari Seoul.' },
  //   { number: 3, title: 'Letter of Credit Setup', description: 'We\'ll send a pro-forma invoice with details for setting up a Letter of Credit. Complete the setup to secure the transaction.' },
  //   { number: 4, title: 'Shipping and Customs', description: 'Upon confirmation of the Letter of Credit, we proceed with shipping and customs clearance for your supercar.' },
  //   { number: 5, title: 'Vehicle Inspection', description: 'Inspect the vehicle in Vancouver, BC within a day of its arrival. Ensure everything is as per your expectations.' },
  //   { number: 6, title: 'Finalize Transaction', description: 'Confirm satisfaction to release the Letter of Credit funds to us, and receive all necessary ownership documents.' },
  //   { number: 7, title: 'Return Policy', description: 'If the supercar does not meet your expectations, you are responsible for return shipping and any associated customs fees.' },
  // ],
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Escrow');

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.tabs}>
          <h3 className={styles.title}>Paying with:</h3>
          <div
            className={`${styles.tab} ${activeTab === 'Cash' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('Cash')}
          >
            Cash
            {/* <span className={styles.tabDescription}>Cheapest</span> */}
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Escrow' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('Escrow')}
          >
            <img src={'/logos/escrowcom.svg'} alt="Escrow" className={styles.escrowLogo} />
            <a href="https://www.escrow.com/cars" target="_blank" rel="noopener noreferrer" className={styles.questionMark}>?</a>
            {/* <span className={styles.tabDescription}>Safest</span> */}
          </div>
          {/* <div
            className={`${styles.tab} ${activeTab === 'LetterOfCredit' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('LetterOfCredit')}
          >
            Letter of Credit
            <span className={styles.tabDescription}>No Deposit Required</span>
          </div> */}
        </div>
        <div className={styles.content}>
          <Steps steps={steps[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
