import React from 'react';
import Header from '../components/Header';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from '../images/image1.jpg';

const ContentContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '40px 0',
  width: '100%',
  boxSizing: 'border-box',
});

const TextContainer = styled(Box)({
  maxWidth: '600px',
  paddingRight: '20px',
  textAlign: 'left',
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Arial, sans-serif',
});

const ShareContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
});

const ShareIcon = styled(Box)({
  marginRight: '10px',
  color: '#000',
  cursor: 'pointer',
  fontSize: '24px',
  '&:hover': {
    color: '#1976d2',
  },
});

const About = () => {
  return (
    <>
      <Header />
      <Container style={{ padding: 0 }}>
        <ContentContainer>
          <TextContainer>
            <StyledTypography variant="h3" component="h1" gutterBottom>
              Resume <span style={{ color: '#1976d2' }}>Builder</span>
            </StyledTypography>
            <StyledTypography variant="h5" paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </StyledTypography>
            <StyledTypography variant="h6" style={{ color: '#1976d2' }}>Share with your friends</StyledTypography>
            <ShareContainer>
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
          <Box>
            <img
              src= {Image}
              alt="Illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </ContentContainer>
      </Container>
    </>
  );
};

export default About;
