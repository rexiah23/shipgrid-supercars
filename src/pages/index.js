// src/pages/index.js
import Hero from '@/components/Hero';
import FeatureBlocks from '@/components/FeatureBlocks';
import VehicleGrid from '@/components/VehicleGrid';
import ShippingMap from '@/components/ShippingMap';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { useMediaQuery } from '@mui/material';

import {
  vehicles
} from '../../data/vehicles'
import ReadyToCall from '@/components/Ready';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
      <main>
          <Hero isMobile={isMobile}/>
          {!isMobile && <FeatureBlocks />}
          <VehicleGrid vehicles={vehicles} isMobile={isMobile}/>
          <ShippingMap />
          <FAQ showTitle={true} displayLeft={true}/>
          <ReadyToCall />
          {/* <ContactForm /> */}
      </main>
  );
}
