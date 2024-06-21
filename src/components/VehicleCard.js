import Link from 'next/link';
import styles from './Inventory.module.css';
import { Typography, Grid, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build'; // Icon for transmission
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCar, faGasPump, faWrench, faExclamationTriangle, faCheckCircle, faPalette, faCogs, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-CA');  // 'en-CA' is the locale for English-speaking Canada
}

const VehicleCard = ({ vehicle, isMobile }) => {
  return ( 
  <Link key={vehicle.id} className={styles.card} href={`/vehicle/${vehicle.id}`} passHref>
    <img src={vehicle.gallery[0]} alt={`${vehicle.make} ${vehicle.model}`} className={styles.image} />
    <div className={styles.details}>
    <Typography component="h3" variant="h6" sx={{
      fontWeight: 'bold',
      textAlign: 'center', // center all the text
      display: 'block', // ensure it respects container width
      overflow: 'hidden', // hide overflow
      textOverflow: 'ellipsis', // use ellipsis for text that overflows
      maxWidth: '100%', // ensure it does not exceed its container
      fontSize: '1.4em',
      marginBottom: '12px'
  }}>
    <div>
        {vehicle.year} {vehicle.make} {vehicle.model}
    </div>
    <div>
        <Typography component="span" sx={{ fontWeight: 'normal', fontSize: '1.05em', textDecoration: 'underline' }}>
            {vehicle.trim}
        </Typography>
    </div>
    </Typography>

      <Grid container spacing={2} alignItems="center"> {/* Increased spacing for better layout */}
        <Grid item xs={6} display="flex" alignItems="center" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight: 8, fontSize: '1.3em' }} />
          <Typography style={{ fontSize: '1.15em'}}>{formatNumberWithCommas(vehicle.kms)} km</Typography>
        </Grid>
        <Grid item xs={6} display="flex" alignItems="center" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <FontAwesomeIcon icon={faCogs} style={{ marginRight: 8,  fontSize: '1.3em' }} />
          <Typography style={{ fontSize: '1.15em'}}>{vehicle.transmission} </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
            fontSize: '1.3em',
            marginTop: '12px',
            backgroundColor: 'green',
            color: 'white', // Optional: Change the text color to ensure it's readable
            padding: '8px', // Optional: Add some padding for better appearance
            borderRadius: '4px' // Optional: Add rounded corners
        }}
      >
        CAD ${formatNumberWithCommas(vehicle.price)}
      </Typography>

    </div>
  </Link>
  )
}

export default VehicleCard;