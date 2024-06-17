// src/pages/index.js
import Hero from '@/components/Hero';
import FeatureBlocks from '@/components/FeatureBlocks';
import VehicleGrid from '@/components/VehicleGrid';
import ShippingMap from '@/components/ShippingMap';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

import {
  vehicles
} from '../../data/vehicles'
import ReadyToCall from '@/components/Ready';

export default function Home() {
  return (
      <main>
          <Hero />
          <FeatureBlocks />
          <VehicleGrid vehicles={vehicles} />
          <ShippingMap />
          <FAQ showTitle={true} displayLeft={true}/>
          <ReadyToCall />
          {/* <ContactForm /> */}
      </main>
  );
}
