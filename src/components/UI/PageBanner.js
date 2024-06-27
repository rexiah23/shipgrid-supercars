// components/PageBanner.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BannerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '300px', // Adjust the height as needed
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between', 
}));

const Title = styled(Typography)(({ theme }) => ({
  backgroundColor: 'orange',
  color: 'white',
  padding: '10px',
  zIndex: 2,
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.5)', // Darkened opacity
  position: 'absolute',
  top: 0,
  left: 0,
}));

const TitleWrapper = styled('div')(({ theme }) => ({
  width: '75%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',

}));

const PageBanner = ({ title, imageUrl }) => {
  return (
    <BannerWrapper>
      <Image src={imageUrl} alt="Banner Image" />
      <TitleWrapper>
        <Title variant="h1">{title}</Title>
      </TitleWrapper>
    </BannerWrapper>
  );
};

export default PageBanner;
