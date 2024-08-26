import React from 'react';
import { useSelector } from 'react-redux';
import Template1 from '../Templates/template-1';
import Template2 from '../Templates/template-2';
import Template3 from '../Templates/template-3';
import Template4 from '../Templates/template-4';
import { Box, Typography, Container } from '@mui/material'; // Import Material-UI components

const Preview = ({ selectedTemplate }) => {
  // Use useSelector to get the resume data from the Redux state
  const resumeData = useSelector((state) => state.resume);

  return (
    <Container maxWidth="md" sx={{ padding: '16px' }}>
      <Box sx={{ textAlign: 'center' }}>
        {selectedTemplate ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {selectedTemplate.id === 1 && <Template1 data={resumeData} />}
            {selectedTemplate.id === 2 && <Template2 data={resumeData} />}
            {selectedTemplate.id === 3 && <Template3 data={resumeData} />}
            {selectedTemplate.id === 4 && <Template4 data={resumeData} />}
          </Box>
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Please select a template from the Templates page.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Preview;
