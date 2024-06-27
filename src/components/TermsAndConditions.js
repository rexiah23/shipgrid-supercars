// pages/terms-and-conditions.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography paragraph>
          Welcome to Shipgrid Solutions Inc. These Terms & Conditions govern your use of our services related to the importation of vehicles from South Korea into Canada. By engaging our services, you agree to comply with and be bound by these terms.
        </Typography>
        <Typography variant="h6" gutterBottom>
          2. Services Provided
        </Typography>
        <Typography paragraph>
          We provide vehicle importation services from South Korea to Canada based on customer demand. This includes sourcing, purchasing, shipping, customs clearance, and delivery of vehicles.
        </Typography>
        <Typography variant="h6" gutterBottom>
          3. Orders and Payment
        </Typography>
        <Typography paragraph>
          - All orders must be placed through our official communication channels.<br />
          - A non-refundable deposit of 10-25% of the vehicle's purchase price is required to confirm the order.<br />
          - If paying with cash, the remaining balance must be paid in full before the vehicle is shipped from South Korea.<br />
          - If paying with Escrow, the remaining balance must be paid to Escrow.com before the vehicle is shipped from South Korea.<br />
          - Payment methods accepted: Cash and Escrow.
        </Typography>
        <Typography variant="h6" gutterBottom>
          4. Pricing and Fees
        </Typography>
        <Typography paragraph>
          - Prices are quoted in Canadian Dollars (CAD) and include the cost of the vehicle, shipping, and basic customs clearance.<br />
          - Additional fees may apply for services such as specialized inspections, additional customs duties, or delivery to remote locations.<br />
          - Any changes in government regulations or tariffs that affect the cost will be communicated to the customer and reflected in the final price.
        </Typography>
        <Typography variant="h6" gutterBottom>
          5. Delivery and Inspection
        </Typography>
        <Typography paragraph>
          - Estimated delivery times will be provided upon order confirmation but are subject to change due to factors beyond our control, such as shipping delays or customs processing.<br />
          - Upon arrival in Canada, the vehicle will undergo necessary inspections to ensure compliance with Canadian safety and emission standards.<br />
          - Shipgrid Solutions Inc. will be responsible for any additional customizations or certifications required for the vehicle to meet local regulations.
        </Typography>
        <Typography variant="h6" gutterBottom>
          6. Warranty and Liability
        </Typography>
        <Typography paragraph>
          - We do not provide any warranty for the vehicles imported.<br />
          - Shipgrid Solutions Inc. is liable for any damage to the vehicle until the owner takes delivery of the vehicle.<br />
          - Our liability is limited to the value of the vehicle. We are not responsible for any indirect, incidental, or consequential damages.
        </Typography>
        <Typography variant="h6" gutterBottom>
          7. Cancellation and Refunds
        </Typography>
        <Typography paragraph>
          - Orders can be canceled after the deposit is paid until the inspection period is over.<br />
          - If the car has not been purchased yet, there is no cancellation fee. Otherwise, the customer will be responsible for all shipping costs and customs clearance costs.<br />
          - Refunds for cancellations after shipment will be handled on a case-by-case basis.
        </Typography>
        <Typography variant="h6" gutterBottom>
          8. Customer Responsibilities
        </Typography>
        <Typography paragraph>
          - Customers must provide accurate and complete information for the importation process.<br />
          - Any additional costs incurred due to misinformation or non-compliance will be the customer's responsibility.
        </Typography>
        <Typography variant="h6" gutterBottom>
          9. Privacy Policy
        </Typography>
        <Typography paragraph>
          - We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data. The Privacy Policy is available on a separate page.
        </Typography>
        <Typography variant="h6" gutterBottom>
          10. Governing Law
        </Typography>
        <Typography paragraph>
          - These Terms & Conditions are governed by the laws of the province of British Columbia and the federal laws of Canada.<br />
          - Any disputes arising from these terms will be resolved in the courts of British Columbia, Canada.
        </Typography>
        <Typography variant="h6" gutterBottom>
          11. Amendments
        </Typography>
        <Typography paragraph>
          - We reserve the right to amend these Terms & Conditions at any time. Any changes will be communicated to customers and posted on our website.
        </Typography>
        <Typography variant="h6" gutterBottom>
          12. Contact Information
        </Typography>
        <Typography paragraph>
          - For any questions or concerns, please contact us at admin@shipgrid.io or 647-677-7891.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
