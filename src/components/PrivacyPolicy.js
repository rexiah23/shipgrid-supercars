// pages/privacy-policy.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography paragraph>
          At Shipgrid Solutions Inc., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Information Collection
        </Typography>
        <Typography paragraph>
          We collect information from you when you place an order, subscribe to our newsletter, or fill out a form. The types of information collected may include your name, email address, mailing address, phone number, and payment information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Information Use
        </Typography>
        <Typography paragraph>
          The information we collect from you may be used in the following ways:
        </Typography>
        <Typography component="ul">
          <li>To process transactions and deliver the ordered products and services.</li>
          <li>To improve our website and customer service.</li>
          <li>To send periodic emails regarding your order or other products and services.</li>
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Information Protection
        </Typography>
        <Typography paragraph>
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Information Sharing
        </Typography>
        <Typography paragraph>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Cookies
        </Typography>
        <Typography paragraph>
          We use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to disable cookies through your individual browser options.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Third-Party Links
        </Typography>
        <Typography paragraph>
          Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Consent
        </Typography>
        <Typography paragraph>
          By using our site, you consent to our website's privacy policy.
        </Typography>

        <Typography variant="h6" gutterBottom>
          8. Changes to our Privacy Policy
        </Typography>
        <Typography paragraph>
          If we decide to change our privacy policy, we will post those changes on this page.
        </Typography>

        <Typography variant="h6" gutterBottom>
          9. Contacting Us
        </Typography>
        <Typography paragraph>
          If there are any questions regarding this privacy policy, you may contact us using the information below:
        </Typography>
        <Typography paragraph>
          Shipgrid Solutions Inc.<br />
          Email: admin@shipgrid.io<br />
          Phone: 647-677-7891
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
