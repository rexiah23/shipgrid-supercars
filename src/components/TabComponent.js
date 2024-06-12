import { useState } from 'react';
import styles from './TabComponent.module.css';
import Steps from './Steps';
import BookCallCTA from './BookCallCTA';

const steps = {
  Cash: [
    { number: 1, title: 'Send us link for your desired vehicle', description: '' },
    { number: 2, title: 'We will go onsite and send you detailed videos and our inspection results', description: '' },
    { number: 3, title: 'We will then send you a pro-forma invoice with wire details', description: '' },
    { number: 4, title: 'You wire the full funds to Shipgrid Solutions', description: '' },
    { number: 5, title: 'We will then ship, custom clear, and deliver the vehicle to you', description: '' },
    { number: 5, title: 'We will then ship, custom clear, and deliver the vehicle to you', description: '' },
  ],
  Escrow: [
    { number: 1, title: 'Select Your Supercar', description: 'Send us a link for your desired supercar.' },
    { number: 2, title: 'Inspection and Media', description: 'We will go onsite and send you detailed videos and our inspection results.' },
    { number: 3, title: 'Optional PPI', description: 'You may choose to get a Pre-Purchase Inspection (PPI) completed at the official manufacturer dealership in Seoul (e.g., Lamborghini Seoul, Ferrari Seoul, etc.).' },
    { number: 4, title: 'Escrow Agreement', description: 'We will send you a pro-forma invoice with wire details and an Escrow.com transaction for the supercar. Sign the Escrow.com transaction and wire the full funds to Escrow.com.' },
    { number: 5, title: 'Shipping and Customs', description: 'Once Escrow.com confirms receipt of the funds, we will ship out and custom clear the supercar.' },
    { number: 6, title: 'Arrival and Inspection', description: 'Once the supercar lands in Vancouver, BC, you have 1 full day to have a mechanic inspect the supercar at the port.' },
    { number: 7, title: 'Release of Funds and Delivery', description: 'If you like the supercar, instruct Escrow.com to release the funds to us. You will automatically get the title and all necessary ownership documentation.' },
    { number: 8, title: 'Return and Penalty', description: 'If you do not want to take delivery, you will be liable for the return shipping costs and all the customs clearance fees that were paid on the supercar.' },
  ],
  // LetterOfCredit: [
  //   { number: 1, title: 'Send us link for your desired vehicle', description: '' },
  //   { number: 2, title: 'We will go onsite and send you detailed videos and our inspection results', description: '' },
  //   { number: 3, title: 'We will then send you a pro-forma invoice with wire details and Escrow.com transaction for the vehicle', description: '' },
  //   { number: 4, title: 'Sign the Escrow.com transaction and wire Escrow.com the full funds for the vehicle', description: '' },
  //   { number: 5, title: 'We will ship out and custom clear the vehicle', description: '' },
  //   { number: 6, title: 'Once it lands in Vancouver, BC, you have 1 full day to have a mechanic inspect the vehicle at the port', description: '' },
  //   { number: 7, title: 'If you like the vehicle, you will tell Escrow.com to release the funds to us and you will automatically get the title and all necessary ownership documentation', description: '' },
  //   { number: 8, title: 'If you don\'t like the car, you can reject the car. However, you will be liable for the shipping back home and all the customs clearance fees that were paid on the vehicle', description: '' },
  // ],
};

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Escrow')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Select Payment Method</h2>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'Cash' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Cash')}
        >
          Cash
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'Escrow' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('Escrow')}
        >
          <img src={'/logos/escrowcom.svg'} alt="Escrow" className={styles.escrowLogo} />
        </div>
        {/* <div
          className={`${styles.tab} ${activeTab === 'LetterOfCredit' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('LetterOfCredit')}
        >
          Letter of Credit
        </div> */}
      </div>
      <div className={styles.content}>
        <Steps steps={steps[activeTab]} />
      </div>
    </div>
  );
};

export default TabComponent;
