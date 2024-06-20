import { useRouter } from 'next/router';
import styles from '../../components/VehicleDetails/VehicleDetails.module.css';

import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import VehicleDetails2 from '@/components/VehicleDetails/VehicleDetails2';

import { vehicles } from '../../../data/vehicles';
import VehicleDetailsMobile from '@/components/VehicleDetails/VehicleDetailsMobile';

const VehicleDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const vehicle = vehicles.find(v => v.id === parseInt(id));

    if (!vehicle) {
        return <div>Loading...</div>;
    }

    return (
        <>
          <main className={styles.container}>
              <VehicleDetails vehicle={vehicle} />
          </main>
        </>
    );
};

export default VehicleDetailsPage;
