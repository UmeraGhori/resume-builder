import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Styled component for the AppBar with custom styles
const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff', // Background color of the header
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect for the header
  borderBottom: '1px solid #ddd', // Border at the bottom of the header
  color: '#000', // Text color
  [theme.breakpoints.down('sm')]: {
    // Styles for small screens
    padding: '0 8px', // Reduced padding for smaller screens
  },
}));

// Styled component for the logo text with custom styles
const Logo = styled(Typography)(({ theme }) => ({
  display: 'flex', // Flexbox layout for logo
  alignItems: 'center', // Center items vertically
  fontWeight: 'bold', // Bold font weight
  color: '#FF4C4C', // Color of the logo text
  marginRight: 'auto', // Push logo to the left
  [theme.breakpoints.down('sm')]: {
    // Styles for small screens
    fontSize: '1rem', // Smaller font size for smaller screens
  },
}));

// Styled component for regular buttons with custom styles
const HeaderButton = styled(Button)(({ theme }) => ({
  color: '#000', // Text color of the button
  textTransform: 'none', // Do not transform text to uppercase
  marginRight: '20px', // Space to the right of the button
  fontWeight: 'normal', // Normal font weight
  [theme.breakpoints.down('sm')]: {
    // Styles for small screens
    marginRight: '10px', // Reduced margin for smaller screens
    fontSize: '0.875rem', // Smaller font size for smaller screens
  },
}));

// Styled component for bold buttons with custom styles
const BoldButton = styled(Button)(({ theme }) => ({
  color: '#000', // Text color of the button
  textTransform: 'none', // Do not transform text to uppercase
  fontWeight: 'bold', // Bold font weight
  [theme.breakpoints.down('sm')]: {
    // Styles for small screens
    fontSize: '0.875rem', // Smaller font size for smaller screens
  },
}));

const Header = () => {
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handler function for clicking the logo, navigates to the home page
  const handleLogo = () => {
    navigate('/');
  };

  // Handler function for clicking the About Us button, navigates to the about page
  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <HeaderContainer position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', // Allows wrapping of elements on small screens
        }}
      >
        {/* Logo with a click handler to navigate to the home page */}
        <Logo variant="h6" style={{ cursor: 'pointer' }} onClick={handleLogo}>
          <Box
            component="span"
            sx={{
              backgroundColor: 'black',
              color: '#fff',
              borderRadius: '3px',
              padding: '0 4px',
              marginRight: '4px',
            }}
          >
            Al
          </Box>
          maBetter
        </Logo>
        {/* Container for buttons */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {/* Button for resume templates */}
          <HeaderButton onClick={handleLogo}>Resume Templates</HeaderButton>
          {/* Button for my resumes */}
          <HeaderButton>My Resumes</HeaderButton>
          {/* Bold button for about us, with a click handler to navigate to the about page */}
          <BoldButton onClick={handleAbout}>About Us</BoldButton>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
