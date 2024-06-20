import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import SpeedIcon from '@mui/icons-material/Speed';        // For kilometers
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';// For seats
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';  // For fuel usage
import PeopleIcon from '@mui/icons-material/People'; // Icon for number of owners
import ReportIcon from '@mui/icons-material/Report';      // For accidents
import { Tabs, Tab, Box, Typography, Grid, Card, CardMedia, Button } from '@mui/material';
import Image from 'next/image'; // If you are using Next.js
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaletteIcon from '@mui/icons-material/Palette'; // Icon for exterior and interior colors
import BuildIcon from '@mui/icons-material/Build'; // Icon for transmission, drivetrain, and engine
import AssessmentIcon from '@mui/icons-material/Assessment';
import useMediaQuery from '@mui/material/useMediaQuery'    

import "./VehicleDetails.module.css";
import BookCallCTA from '../BookCallCTA';

function formatNumberWithCommas(number) {
    return number.toLocaleString('en-CA');  // 'en-CA' is the locale for English-speaking Canada
}


const DetailTabs = ({ vehicle }) => {
    const [value, setValue] = useState(0);

    const openPdf = (pdfUrl) => {
        window.open(pdfUrl, '_blank');
    };

    const overviewContent = (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} display="flex" alignItems="center">
                <SpeedIcon sx={{ marginRight: 1 }} />
                <Typography>{formatNumberWithCommas(vehicle.kms)} km</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <DirectionsCarIcon sx={{ marginRight: 1 }} />
                <Typography>{vehicle.bodyStyle}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <PaletteIcon sx={{ marginRight: 1 }} />
                <Typography>{vehicle.exteriorColor} / {vehicle.interiorColor}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <BuildIcon sx={{ marginRight: 1 }} />
                <Typography>{vehicle.transmission} · {vehicle.drivetrain} · {vehicle.engine}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <LocalGasStationIcon sx={{ marginRight: 1 }} />
                <Typography>{vehicle.fuelType}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <PeopleIcon sx={{ marginRight: 1 }} />
                <Typography>{vehicle.numberOfOwners} previous owners</Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <ReportIcon sx={{ marginRight: 1 }} />
                {vehicle.insuranceHistoryPdf ? (
                    vehicle.accidentHistory ? (
                        <Typography component="a" href="#" onClick={() => openPdf(vehicle.insuranceHistoryPdf)} sx={{ cursor: 'pointer' }}>
                            View Accident Report
                        </Typography>
                    ) : (
                        <Typography component="a" href="#" onClick={() => openPdf(vehicle.insuranceHistoryPdf)} sx={{ cursor: 'pointer' }}>
                           No Accidents! - (View Report)
                        </Typography>
                    )
                ) : (
                    <Typography>N/A</Typography>
                )}
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
                <AssessmentIcon sx={{ marginRight: 1 }} />  
                {vehicle.conditionReportPdf ? (
                    <Typography component="a" href="#" onClick={() => openPdf(vehicle.conditionReportPdf)} sx={{ cursor: 'pointer' }}>
                        View Condition Report
                    </Typography>
                ) : (
                    <Typography>N/A</Typography>
                )}
            </Grid>

        </Grid>
    );
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formatCurrency = (amount) => {
        return `$${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    };

    const createLineItem = (name, amount, isHighlight = false, isDiscount = false) => (
        <Box sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            my: 0.5,
            bgcolor: isHighlight ? '#f0f0f0' : 'transparent',
            color: isDiscount ? 'green' : 'inherit'
        }}>
            <Typography variant="body2">{name}:</Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{formatCurrency(amount)}</Typography>
        </Box>
    );

    // Define the common line items for cash and escrow transactions
    const commonLineItems = [
        { name: "List Price", amount: vehicle.price, isHighlight: true },
        { name: "Canada Customs Duty (6.1%)", amount: vehicle.price * 0.061 },
        { name: "Canada Customs GST (5%)", amount: vehicle.price * 0.05 },
        { name: "Ocean Freight To Vancouver YVR (Fully insured)", amount: 7500 },
        { name: "Commission", amount: 6000 }
    ];

    // Cash-specific line items (including the cash discount)
    const cashLineItems = [
        ...commonLineItems,
        { name: "Cash Discount", amount: -2000, isDiscount: true } // Highlight discount in green
    ];

    // Calculate total amount for cash
    const totalAmountCash = cashLineItems.reduce((acc, item) => acc + item.amount, 0);

    // Escrow-specific line items (no cash discount)
    const escrowLineItems = [...commonLineItems];

    // Calculate total amount for escrow
    const totalAmountEscrow = escrowLineItems.reduce((acc, item) => acc + item.amount, 0);

     // Escrow-specific line items (no cash discount)
     const letterOfCreditLineItems = [...commonLineItems];

     // Calculate total amount for escrow
     const totalAmountLetterOfCredit = letterOfCreditLineItems.reduce((acc, item) => acc + item.amount, 0);

    const cashContent = (
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            {cashLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight, item.isDiscount))}
            <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Fully Cleared and Ready to drive price: </span>
                    <span>CAD {formatCurrency(totalAmountCash)}</span>
                </Typography>
            </Box>
        </Box>
    );

    const escrowContent = (
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            {escrowLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight))}
            <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total</span>
                    <span>CAD {formatCurrency(totalAmountEscrow)}</span>
                </Typography>
            </Box>
        </Box>
    );

    const letterOfCreditContent = (
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            {escrowLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight))}
            <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
                <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total</span>
                    <span>CAD {formatCurrency(totalAmountEscrow)}</span>
                </Typography>
            </Box>
        </Box>
    );

    const tabPanels = {
        0: overviewContent,
        1: cashContent,
        2: escrowContent,
        3: letterOfCreditContent
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="vehicle details tabs">
                <Tab label="Details" />
                <Tab label="Cash" />
                <Tab 
                    icon={<img src="/logos/escrowcom.svg" alt="Escrow" style={{ height: 24, verticalAlign: 'middle', transform: 'translateY(50%)' }} />} 
                    label={<span style={{ textTransform: 'none', color: 'transparent' }}>Escrow</span>} // Hide label visually but keep for accessibility
                />
                <Tab label="Letter of Credit"/>
            </Tabs>
            <Box sx={{ p: 3 }}>
                {tabPanels[value]}
            </Box>
        </Box>
    );
};

const MainImage = ({ src, alt, onOpen }) => {
    return (
        <Card onClick={onOpen}>
            <CardMedia
                component="img"
                image={src}
                alt={alt}
                sx={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }}
            />
        </Card>
    );
}

const SmallImageDisplay = ({ vehicle, selectedImage, onSelectImage }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {vehicle.gallery.map((img, index) => (
                <Card
                    key={index}
                    sx={{ width: '20%', cursor: 'pointer', border: selectedImage === img ? '2px solid orange' : 'none' }}
                    onClick={() => onSelectImage(img)}
                >
                    <CardMedia
                        component="img"
                        image={img}
                        alt={`${vehicle.make} ${vehicle.model} image ${index + 1}`}
                    />
                </Card>
            ))}
        </Box>
    );
};

const ImageOverlay = ({ images, selectedImage, onClose, onSelectNext, onSelectPrev }) => {
    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="image-modal-title"
            aria-describedby="image-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{
                position: 'relative',
                width: '70%',  // Set standardized width
                height: '70%', // Set standardized height
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 2,
                outline: 'none'
            }}>
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8, color: 'gray' }} // Close button color adjusted for visibility
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
                <IconButton
                    sx={{ position: 'absolute', left: 16, color: 'orange', top: '50%', transform: 'translateY(-50%)' }} // Left arrow in orange
                    onClick={onSelectPrev}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    sx={{ position: 'absolute', right: 16, color: 'orange', top: '50%', transform: 'translateY(-50%)' }} // Right arrow in orange
                    onClick={onSelectNext}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
                <img src={selectedImage} alt="Expanded view" style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain', // Maintains the aspect ratio
                    border: '1px solid #ccc' // Optionally add a border for better visibility
                }} />
            </Box>
        </Modal>
    );
};

const VehicleDetailsDesktop = ({ vehicle }) => {
    const [selectedImage, setSelectedImage] = useState(vehicle.gallery[0]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const router = useRouter(); // Hook for routing
  
    const handleOpenOverlay = () => {
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };

    const handleNextImage = () => {
        const currentIndex = vehicle.gallery.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % vehicle.gallery.length;
        setSelectedImage(vehicle.gallery[nextIndex]);
    };

    const handlePrevImage = () => {
        const currentIndex = vehicle.gallery.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + vehicle.gallery.length) % vehicle.gallery.length;
        setSelectedImage(vehicle.gallery[prevIndex]);
    };

    const handleBookCall = () => {
        window.open('https://calendly.com/shipgrid/supercar-import-discovery-call?month=2024-06', '_blank');
    };

    const handleViewAllInventory = () => {
        router.push('/inventory'); // Navigate to the inventory page
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 2 }}>
            <IconButton onClick={handleViewAllInventory} sx={{ color: 'inherit' }}>
                <ArrowBackIosNewIcon sx={{ verticalAlign: 'middle' }} />
                <Typography variant="body2" sx={{ verticalAlign: 'middle', ml: 0.5 }}>View all Inventory</Typography>
            </IconButton>
            {isOverlayOpen && 
                <ImageOverlay 
                    images={vehicle.gallery}
                    selectedImage={selectedImage}
                    onClose={handleCloseOverlay}
                    onSelectNext={handleNextImage}
                    onSelectPrev={handlePrevImage}
                />
            }
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                    <MainImage src={selectedImage} alt={`${vehicle.make} ${vehicle.model}`} onOpen={handleOpenOverlay} />
                    <SmallImageDisplay vehicle={vehicle} selectedImage={selectedImage} onSelectImage={setSelectedImage} />
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        <span style={{ fontWeight: 'bold' }}>
                            {vehicle.year} {vehicle.make} {vehicle.model}
                        </span>
                        <span> {vehicle.trim}</span>
                    </Typography>
                    <Typography variant="h6">
                        ${formatNumberWithCommas(vehicle.price)} <Typography component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>CAD</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0 }}>
                        View tabs for full pricing breakdown
                    </Typography>
                    <BookCallCTA text='GET IT NOW' style={{ marginTop: '16px', border: 'none', boxShadow: 'none'}}/>

                    <DetailTabs vehicle={vehicle}/>
                </Box>
            </Box>
        </Box>
    );
};

const VehicleDetailsMobile = ({ vehicle }) => {
    const [selectedImage, setSelectedImage] = useState(vehicle.gallery[0]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const router = useRouter(); // Hook for routing
  
    const handleOpenOverlay = () => {
        setIsOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };

    const handleNextImage = () => {
        const currentIndex = vehicle.gallery.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % vehicle.gallery.length;
        setSelectedImage(vehicle.gallery[nextIndex]);
    };

    const handlePrevImage = () => {
        const currentIndex = vehicle.gallery.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + vehicle.gallery.length) % vehicle.gallery.length;
        setSelectedImage(vehicle.gallery[prevIndex]);
    };

    const handleBookCall = () => {
        window.open('https://calendly.com/shipgrid/supercar-import-discovery-call?month=2024-06', '_blank');
    };

    const handleViewAllInventory = () => {
        router.push('/inventory'); // Navigate to the inventory page
    };

    return (
        <Box sx={{ display: 'flex', maxWidth: 1200, mx: 'auto', p: 2 }}>
            <IconButton onClick={handleViewAllInventory} sx={{ color: 'inherit' }}>
                <ArrowBackIosNewIcon sx={{ verticalAlign: 'middle' }} />
                <Typography variant="body2" sx={{ verticalAlign: 'middle', ml: 0.5 }}>View all Inventory</Typography>
            </IconButton>
            {isOverlayOpen && 
                <ImageOverlay 
                    images={vehicle.gallery}
                    selectedImage={selectedImage}
                    onClose={handleCloseOverlay}
                    onSelectNext={handleNextImage}
                    onSelectPrev={handlePrevImage}
                />
            }
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <Box>
                    <MainImage src={selectedImage} alt={`${vehicle.make} ${vehicle.model}`} onOpen={handleOpenOverlay} />
                    <SmallImageDisplay vehicle={vehicle} selectedImage={selectedImage} onSelectImage={setSelectedImage} />
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        <span style={{ fontWeight: 'bold' }}>
                            {vehicle.year} {vehicle.make} {vehicle.model}
                        </span>
                        <span> {vehicle.trim}</span>
                    </Typography>
                    <Typography variant="h6">
                        ${formatNumberWithCommas(vehicle.price)} <Typography component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>CAD</Typography>
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0 }}>
                        View tabs for full pricing breakdown
                    </Typography>
                    <BookCallCTA text='GET IT NOW' style={{ marginTop: '16px', border: 'none', boxShadow: 'none'}}/>

                    <DetailTabs vehicle={vehicle}/>
                </Box>
            </Box>
        </Box>
    );
};

const VehicleDetails = ({ vehicle }) => {
  const isMobile = useMediaQuery('(max-width:768px)') // Media query hook

  if (isMobile) {
    return <VehicleDetailsMobile vehicle={vehicle} />
  }

  return <VehicleDetailsDesktop vehicle={vehicle}/>
}

export default VehicleDetails
