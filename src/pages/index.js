// src/pages/index.js
import Hero from '@/components/Hero';
import FeatureBlocks from '@/components/FeatureBlocks';
import VehicleGrid from '@/components/VehicleGrid';
import ShippingMap from '@/components/ShippingMap';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import IconRow from '@/components/IconRow';
import { useMediaQuery } from '@mui/material';

import {
  vehicles
} from '../../data/vehicles'
import ReadyToCall from '@/components/Ready';
import TabComponent from '@/components/TabComponent';
import Features from '@/components/Features';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
      <main>
          <Hero isMobile={isMobile}/>
          {/* {!isMobile && <FeatureBlocks />} */}
          {/* <IconRow /> */}
          {!isMobile && 
        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1600px' }}>
            <h1>Highlights</h1>
          </div>
          }
          <Features/>
          <VehicleGrid vehicles={vehicles} isMobile={isMobile}/>
          {/* <ShippingMap /> */}
          <ReadyToCall />
          <div style={{ paddingLeft: '20px', paddingRight: '20px', marginLeft: 'auto', marginRight: 'auto', marginTop: '24px', maxWidth: '1600px' }}>
            <h1 style={{ display: 'flex', justifyContent: 'center'}}>How It Works</h1>
                <TabComponent />
          </div>
          <FAQ showTitle={true} displayLeft={true}/>
          {/* <ContactForm /> */}
      </main>
  );
}
