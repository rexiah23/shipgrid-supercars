import { useState } from 'react';
import styles from './TabComponent.module.css';
import Steps from './Steps';

const steps = {
  Cash: [
    { number: 1, title: 'Select Your Supercar', description: 'Let us know which supercar you want.' },
    { number: 2, title: 'We will go onsite and send you detailed videos and our inspection results', description: '' },
    { number: 3, title: 'We will then send you a pro-forma invoice with wire details', description: '' },
    { number: 4, title: 'You wire the full funds to Shipgrid Solutions', description: '' },
    { number: 5, title: 'We will then ship, custom clear, and deliver the vehicle to you', description: '' },
    { number: 5, title: 'We will then ship, custom clear, and deliver the vehicle to you', description: '' },
  ],
  Escrow: [
    { number: 1, title: 'Choose Supercar', description: 'Select and inform us about your desired supercar.' },
    { number: 2, title: 'Inspection and PPI', description: 'We perform an onsite inspection and send detailed results. Optionally, schedule a Pre-Purchase Inspection (PPI) at a certified dealership in Seoul (e.g., Lamborghini Seoul).' },
    { number: 3, title: 'Deposit Payment', description: 'Send a 10% deposit to secure the vehicle.' },
    { number: 4, title: 'Sign Escrow Agreement', description: 'Review and sign the escrow agreement, then wire the full payment to Escrow.com.' },
    { number: 5, title: 'Shipping and Clearance', description: 'After payment confirmation, we ship and handle customs clearance for your supercar.' },
    { number: 6, title: 'Vehicle Inspection', description: 'Inspect the vehicle in Vancouver, BC within one day of its arrival.' },
    { number: 7, title: 'Finalize Purchase', description: 'If satisfied, instruct Escrow.com to release funds to us, and receive the vehicle title and documents.' },
    { number: 8, title: 'Return Policy', description: 'If unsatisfied, you are responsible for return shipping and customs fees.' },
  ],
  LetterOfCredit: [
    { number: 1, title: 'Select Your Supercar', description: 'Inform us about the supercar you wish to purchase.' },
    { number: 2, title: 'Inspection and PPI', description: 'We conduct an onsite inspection and provide detailed videos and results. Optionally, you can request a Pre-Purchase Inspection (PPI) at an official dealership in Seoul, such as Lamborghini Seoul or Ferrari Seoul.' },
    { number: 3, title: 'Letter of Credit Setup', description: 'We\'ll send a pro-forma invoice with details for setting up a Letter of Credit. Complete the setup to secure the transaction.' },
    { number: 4, title: 'Shipping and Customs', description: 'Upon confirmation of the Letter of Credit, we proceed with shipping and customs clearance for your supercar.' },
    { number: 5, title: 'Vehicle Inspection', description: 'Inspect the vehicle in Vancouver, BC within a day of its arrival. Ensure everything is as per your expectations.' },
    { number: 6, title: 'Finalize Transaction', description: 'Confirm satisfaction to release the Letter of Credit funds to us, and receive all necessary ownership documents.' },
    { number: 7, title: 'Return Policy', description: 'If the supercar does not meet your expectations, you are responsible for return shipping and any associated customs fees.' },
  ],
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Escrow');

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h3 className={styles.title}>Paying with:</h3>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === 'Cash' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('Cash')}
          >
            Cash
            <span className={styles.tabDescription}>Cheapest</span>
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Escrow' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('Escrow')}
          >
            <img src={'/logos/escrowcom.svg'} alt="Escrow" className={styles.escrowLogo} />
            <span className={styles.tabDescription}>Safest</span>
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'LetterOfCredit' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('LetterOfCredit')}
          >
            Letter of Credit
            <span className={styles.tabDescription}>No Deposit Required</span>
          </div>
        </div>
        <div className={styles.content}>
          <Steps steps={steps[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
