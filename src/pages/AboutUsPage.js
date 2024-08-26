import React from 'react';
import Header from '../components/Header'; // Import the Header component
import { Container, Typography, Box, Grid } from '@mui/material'; // Import Material-UI components
import { styled } from '@mui/system'; // Import the styled utility for custom styling
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp icon
import EmailIcon from '@mui/icons-material/Email'; // Import Email icon
import TwitterIcon from '@mui/icons-material/Twitter'; // Import Twitter icon
import Image from '../images/image1.jpg'; // Import image to be displayed

// Styled component for the text section
const TextContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '600px',
    paddingRight: '20px',
  },
  padding: '16px',
  textAlign: 'left',
}));

// Styled Typography component with custom font family
const StyledTypography = styled(Typography)({
  fontFamily: 'Arial, sans-serif',
});

// Styled component for the share icons container
const ShareContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  flexWrap: 'wrap', // Allow icons to wrap to the next line on smaller screens
}));

// Styled component for each share icon with hover effect
const ShareIcon = styled(Box)({
  margin: '8px',
  color: '#000',
  cursor: 'pointer',
  fontSize: '24px',
  '&:hover': {
    color: '#1976d2', // Change color on hover
  },
});

const About = () => {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <Container maxWidth="lg" sx={{ padding: 0 }}> {/* Container with responsive maxWidth */}
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ py: 4 }}>
          <Grid item xs={12} md={6}>
            <TextContainer>
              {/* Title with a custom color span */}
              <StyledTypography variant="h3" component="h1" gutterBottom>
                Resume <span style={{ color: '#1976d2' }}>Builder</span>
              </StyledTypography>
              {/* Description text */}
              <StyledTypography variant="h5" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </StyledTypography>
              {/* Subheading for sharing section with custom color */}
              <StyledTypography variant="h6" sx={{ color: '#1976d2' }}>Share with your friends</StyledTypography>
              {/* Container for share icons */}
              <ShareContainer>
                {/* Each icon wrapped in ShareIcon component */}
                <ShareIcon>
                  <FacebookIcon />
                </ShareIcon>
                <ShareIcon>
                  <LinkedInIcon />
                </ShareIcon>
                <ShareIcon>
                  <WhatsAppIcon />
                </ShareIcon>
                <ShareIcon>
                  <TwitterIcon />
                </ShareIcon>
                <ShareIcon>
                  <EmailIcon />
                </ShareIcon>
              </ShareContainer>
            </TextContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Box for displaying the image */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={Image} // Image source
                alt="Illustration" // Alt text for the image
                style={{ maxWidth: '100%', height: 'auto' }} // Ensure image fits within its container
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About; // Export the About component
