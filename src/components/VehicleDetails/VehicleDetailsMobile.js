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
import Modal from '@mui/material/Modal';
import "./VehicleDetails.module.css";
import BookCallCTA from '../BookCallCTA';
import { DriveEta } from '@mui/icons-material';

function formatNumberWithCommas(number) {
    return number.toLocaleString('en-CA');  // 'en-CA' is the locale for English-speaking Canada
}

const MainImage = ({ src, alt, onOpen }) => {
    return (
        <Card onClick={onOpen} sx={{ width: '100%', maxWidth: '600px', margin: '0 auto', cursor: 'pointer' }}>
            <CardMedia
                component="img"
                image={src}
                alt={alt}
                sx={{ width: '100%', height: 'auto', aspectRatio: '4/3', borderRadius: '8px' }}
            />
        </Card>
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

const SmallImageDisplay = ({ vehicle, selectedImage, onSelectImage }) => {
  return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginTop: '8px' }}>
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

const VehicleDetailsMobile = ({ vehicle }) => {
    const [selectedImage, setSelectedImage] = useState(vehicle.gallery[0]);
    const [value, setValue] = useState(0);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const router = useRouter()


    const openPdf = (pdfUrl) => {
      window.open(pdfUrl, '_blank');
    };
    
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

    const handleViewAllInventory = () => {
        router.push('/inventory'); // Navigate to the inventory page
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
  };

    const overviewContent = (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: -10, }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                    <SpeedIcon sx={{ marginRight: 0.8 }} />
                    <Typography>{formatNumberWithCommas(vehicle.kms)} km</Typography>
                </Box>
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                    <DirectionsCarIcon sx={{ marginRight: 0.8 }} />
                    <Typography>{vehicle.bodyStyle}</Typography>
                </Box>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                      <PaletteIcon sx={{ marginRight: 0.8 }} />
                      <Typography>{vehicle.exteriorColor} / {vehicle.interiorColor}</Typography>
                </Box>
                
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                      <BuildIcon sx={{ marginRight: 0.8 }} />
                      <Typography>{vehicle.transmission}</Typography>
                </Box>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                       <LocalGasStationIcon sx={{ marginRight: 0.8 }} />
                       <Typography>{vehicle.fuelType}</Typography>
                </Box>

                  <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                   <PeopleIcon sx={{ marginRight: 0.8 }} />
                   <Typography>{vehicle.numberOfOwners} owners</Typography>
                </Box>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5 }}>
                  <DriveEta sx={{ marginRight: 0.8 }} />
                  <Typography>{vehicle.engine}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5 }}>
                  <DriveEta sx={{ marginRight: 0.8 }} />
                  <Typography>{vehicle.drivetrain}</Typography>
                </Box>
              </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                    <ReportIcon sx={{ marginRight: 0.8 }} />
                      {vehicle.insuranceHistoryPdf ? (
                          vehicle.accidentHistory ? (
                              <Typography component="a" href="#" onClick={() => openPdf(vehicle.insuranceHistoryPdf)} sx={{ cursor: 'pointer' }}>
                                  Accident Report
                              </Typography>
                          ) : (
                              <Typography component="a" href="#" onClick={() => openPdf(vehicle.insuranceHistoryPdf)} sx={{ cursor: 'pointer' }}>
                                No Accidents!
                              </Typography>
                          )
                      ) : (
                          <Typography>N/A</Typography>
                      )}
                      </Box>
                      <Box sx={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    my: 0.5,
      
                }}>
                    <AssessmentIcon sx={{ marginRight: 0.8 }} />  
                      {vehicle.conditionReportPdf ? (
                        <Typography component="a" href="#" onClick={() => openPdf(vehicle.conditionReportPdf)} sx={{ cursor: 'pointer' }}>
                            Condition Report
                        </Typography>
                    ) : (
                        <Typography>N/A</Typography>
                    )}
                  </Box>

                </div>

      </div>
    )

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

  // Calculate total amount for letter of credit
  const totalAmountLetterOfCredit = letterOfCreditLineItems.reduce((acc, item) => acc + item.amount, 0);

  const cashContent = (
      <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
          {cashLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight, item.isDiscount))}
          <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
          <Typography 
                sx={{ 
                  fontWeight: 'bold', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px', // Padding around the component
                  borderRadius: '4px' // Optional: for rounded corners
                }}
              >
                <span style={{ fontSize: '0.9em', textAlign: 'center' }}>Fully Cleared & Landed: </span>
                <span>CAD {formatCurrency(totalAmountCash)}</span>
              </Typography>
          </Box>
      </Box>
  );

  const escrowContent = (
      <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
          {escrowLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight))}
          <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
              <Typography 
                sx={{ 
                  fontWeight: 'bold', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px', // Padding around the component
                  borderRadius: '4px' // Optional: for rounded corners
                }}
              >
                <span style={{ fontSize: '0.9em', textAlign: 'center' }}>Fully Cleared & Landed: </span>
                <span>CAD {formatCurrency(totalAmountEscrow)}</span>
              </Typography>

          </Box>
      </Box>
  );

  const letterOfCreditContent = (
      <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
          {letterOfCreditLineItems.map((item, index) => createLineItem(item.name, item.amount, item.isHighlight))}
          <Box sx={{ borderTop: '1px solid #eee', mt: 1, pt: 1 }}>
              <Typography 
                sx={{ 
                  fontWeight: 'bold', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px', // Padding around the component
                  borderRadius: '4px' // Optional: for rounded corners
                }}
              >
                <span style={{ fontSize: '0.9em', textAlign: 'center' }}>Fully Cleared & Landed: </span>
                <span>CAD {formatCurrency(totalAmountLetterOfCredit)}</span>
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
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
        
        <IconButton onClick={handleViewAllInventory} sx={{ color: 'inherit', alignSelf: 'flex-start', padding: '0 20px 20px 0' }}>
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
      <div>
      <Typography variant="h5" sx={{ mb: 1 }}>
          <span style={{ fontWeight: 'bold' }}>
              {vehicle.year} {vehicle.make} {vehicle.model}
          </span>
          <span> {vehicle.trim}</span>
      </Typography>
      </div>
      
      <Box sx={{ width: '100%', maxWidth: '600px', padding: '0 20px 20px 0'}}>
        <MainImage src={selectedImage} alt={`${vehicle.make} ${vehicle.model}`} onOpen={handleOpenOverlay} />
        <SmallImageDisplay vehicle={vehicle} selectedImage={selectedImage} onSelectImage={setSelectedImage} />
    </Box>
      
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h6">
          ${formatNumberWithCommas(vehicle.price)} <Typography component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>CAD</Typography>
      </Typography>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0 }}>
          View tabs for full pricing breakdown
      </Typography>
      <BookCallCTA text='START PURCHASE' position='center' size="sm" style={{ marginTop: '16px', border: 'none', boxShadow: 'none', marginRight: '24px', marginLeft: '15px', width: '100%'}}/>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Details" style={{ marginLeft: -15 }} />
            <Tab label="Cash" style={{ marginLeft: -15 }} /> 
            <Tab 
              icon={<img src="/logos/escrowcom.svg" alt="Escrow" style={{ height: 15 }} />} 
              style={{ minWidth: '50px' }}
            />
            <Tab label="Letter of Credit" style={{ maxWidth: '200px', fontSize: '0.8em' }} />
          </Tabs>
            {tabPanels[value]}
        </div>
      </div>
      
    </div>
    );
};
  
export default VehicleDetailsMobile
  