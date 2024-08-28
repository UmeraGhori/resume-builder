import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Preview from './Preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box, Typography, TextField, Button, Container, Modal } from '@mui/material'; // Import Modal from Material-UI

const PreviewPage = () => {
  const location = useLocation();
  const { selectedTemplate, resumeData } = location.state || {};
  const templateRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const [fileName, setFileName] = useState('resume.pdf');

  const handleFileNameChange = (name) => {
    setFileName(name);
    setShowForm(false); // Hide the form
    generatePDF(name); // Start PDF generation
  };

  const generatePDF = (name) => {
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

      pdf.save(name); // Use the provided file name
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
        onClick={() => setShowForm(true)}
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
      <Modal
        open={showForm}
        onClose={() => setShowForm(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            width: '90%',
            maxWidth: 400,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Create File Name
          </Typography>
          <TextField
            label="Resume Name"
            variant="outlined"
            fullWidth
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={() => handleFileNameChange(fileName)}
            fullWidth
            sx={{
              backgroundColor: '#4CAF50',
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default PreviewPage;
