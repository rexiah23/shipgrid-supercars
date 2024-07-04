// components/FeatureCard.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  MarketsFilledIcon,
  ShieldCheckMarkIcon,
  WrenchIcon,
  DeliveryIcon
} from '@shopify/polaris-icons';

const menuItems = [
  {
    icon: MarketsFilledIcon,
    title: 'Imported from South Korea',
    description: 'Gain access to the largest supercar inventory in Asia.',
  },
  {
    icon: ShieldCheckMarkIcon,
    title: 'Custom Cleared & Registered',
    description: 'We handle customs clearance and registration, so you can start driving immediately.',
  },
  {
    icon: WrenchIcon,
    title: 'Inspect Before Paying',
    description: 'Inspect with your mechanic before deciding to keep or reject the vehicle once it lands in Canada.',
  },
  {
    icon: DeliveryIcon,
    title: 'Delivered To Your Doorstep',
    description: 'We deliver anywhere across western and eastern Canada.',
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Box
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: 345,
        height: 240, // Set a fixed height for each FeatureCard
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#A5E3B9',
          padding: 2,
          borderRadius: 2, // Increased border radius for a slight curve
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          height: 64,
          marginBottom: 2,
        }}
      >
        <Icon width={50} height={50} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" style={{ fontSize: '1.4em' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Features = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {menuItems.map((item, index) => (
          <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
