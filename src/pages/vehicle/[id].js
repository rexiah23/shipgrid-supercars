import { useRouter } from 'next/router';
import styles from '../../components/VehicleDetails/VehicleDetails.module.css';
import VehicleDetails from '@/components/VehicleDetails/VehicleDetails';
import { vehicles } from '../../../data/vehicles';

const VehicleDetailsPage = ({ vehicle }) => {
    const router = useRouter();

    if (router.isFallback) {
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

export async function getStaticPaths() {
    const paths = vehicles.map(vehicle => ({
        params: { id: vehicle.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const vehicle = vehicles.find(v => v.id === parseInt(params.id, 10));

    if (!vehicle) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            vehicle,
        },
    };
}

export default VehicleDetailsPage;
