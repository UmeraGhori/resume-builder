import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Preview from './Preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box, Typography, Button, Container } from '@mui/material'; // Import Material-UI components

const PreviewPage = () => {
  const location = useLocation();
  const { selectedTemplate, resumeData } = location.state || {};
  const templateRef = useRef();

  const generatePDF = () => {
    const input = templateRef.current;

    html2canvas(input, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('portrait', 'pt', 'a4');
      const imgWidth = 595.28;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

      if (imgHeight > pdf.internal.pageSize.height) {
        const pageHeight = pdf.internal.pageSize.height;
        let heightLeft = imgHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <Container maxWidth="md" sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Preview
      </Typography>
      <Box ref={templateRef} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Preview selectedTemplate={selectedTemplate} resumeData={resumeData} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={generatePDF}
        sx={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          '&:hover': {
            backgroundColor: '#45a049',
          },
        }}
      >
        Download PDF
      </Button>
    </Container>
  );
};

export default PreviewPage;
