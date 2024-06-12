// src/components/VehicleDetails.js
import styles from './VehicleDetails.module.css';
import ContactForm from './ContactForm';

const VehicleDetails = ({ vehicle }) => {
    console.log('VEHICLE:', vehicle);

    return (
        <>
            <h1>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} className={styles.mainImage} />
            <div className={styles.details}>
                <p><strong>KMs:</strong> {vehicle.kms}</p>
                <p><strong>Price:</strong> {vehicle.price}</p>
                <p><strong>Lowest Canadian Price:</strong> {vehicle.canadianPrice}</p>
                <p><strong>Savings:</strong> {vehicle.savings}</p>
                <p>{vehicle.description}</p>
                <a href={vehicle.koreanLink} className={styles.link} target="_blank" rel="noopener noreferrer">View Korean Listing</a>
                <a href={vehicle.canadianLink} className={styles.link} target="_blank" rel="noopener noreferrer">View Canadian Listing</a>
            </div>
            <h2>Photo Gallery</h2>
            <div className={styles.gallery}>
                {vehicle.gallery.map((img, index) => (
                    <img key={index} src={img} alt={`${vehicle.make} ${vehicle.model} image ${index + 1}`} className={styles.galleryImage} />
                ))}
            </div>
            <ContactForm vehicle={vehicle} />
        </>
    );
};

export default VehicleDetails;
