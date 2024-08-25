import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #ddd',
  color: '#000',
});

const Logo = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  color: '#FF4C4C',
  marginRight: 'auto',
});

const HeaderButton = styled(Button)({
  color: '#000',
  textTransform: 'none',
  marginRight: '20px',
  fontWeight: 'normal',
});

const BoldButton = styled(Button)({
  color: '#000',
  textTransform: 'none',
  fontWeight: 'bold',
});

const Header = () => {
    const navigate = useNavigate();
    const handleLogo = ()=> {
        navigate('/')
    }

    const handleAbout = ()=> {
        navigate('/about')
    }
  
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Logo variant="h6" style={{ cursor: 'pointer' }} onClick={handleLogo}>
          <Box component="span" sx={{ backgroundColor: 'black', color: '#fff', borderRadius: '3px', padding: '0 4px', marginRight: '4px' }}>
            Al
          </Box>
          maBetter
        </Logo>
        <HeaderButton>Resume Templates</HeaderButton>
        <HeaderButton>My Resumes</HeaderButton>
        <BoldButton onClick={handleAbout}>About Us</BoldButton>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
