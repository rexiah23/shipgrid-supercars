import Link from 'next/link';
import styles from './Inventory.module.css';
import { Typography, Grid, Box } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';        // For kilometers
import BuildIcon from '@mui/icons-material/Build'; // Icon for transmission

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-CA');  // 'en-CA' is the locale for English-speaking Canada
}

const VehicleCard = ({ vehicle, isMobile }) => {
  return ( 
  <Link key={vehicle.id} className={styles.card} href={`/vehicle/${vehicle.id}`} passHref>
    <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} className={styles.image} />
    <div className={styles.details}>
    <Typography component="h3" variant="h6" sx={{
      fontWeight: 'bold',
      display: 'block', // ensure it respects container width
      whiteSpace: 'nowrap', // keep all text in a single line
      overflow: 'hidden', // hide overflow
      textOverflow: 'ellipsis', // use ellipsis for text that overflows
      maxWidth: '100%', // ensure it does not exceed its container
  }}>
      {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
    </Typography>
      <Grid container spacing={2} alignItems="center"> {/* Increased spacing for better layout */}
        <Grid item xs={6} display="flex" alignItems="center" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <SpeedIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                {formatNumberWithCommas(vehicle.kms)} km
            </Typography>
        </Grid>
        <Grid item xs={6} display="flex" alignItems="center" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <BuildIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                {vehicle.transmission}
            </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6">
        ${formatNumberWithCommas(vehicle.price)} <Typography component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>CAD</Typography>
      </Typography>
    </div>
  </Link>
  )
}

export default VehicleCard;