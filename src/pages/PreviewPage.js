import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preview from './Preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box, Typography, Button, Container } from '@mui/material';
import FormContainer from '../components/FormContainer';

const PreviewPage = () => {
    const location = useLocation();
    const { selectedTemplate, resumeData } = location.state || {};
    const templateRef = useRef();
    const [fileName, setFileName] = useState('resume.pdf');

    const handleFileNameChange = (name) => {
        setFileName(name ? `${name}.pdf` : 'resume.pdf');
    };

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

            pdf.save(fileName);
        });
    };

    return (
        <Container maxWidth="lg" sx={{ padding: '20px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center vertically
                    alignItems: 'center',
                }}
            >
                <FormContainer onFileNameChange={handleFileNameChange} />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={generatePDF}
                        sx={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: '#4CAF50',
                            opacity: 1,
                            '&:hover': {
                                backgroundColor: '#45a049',
                            },
                            '&:active': {
                                backgroundColor: '#388e3c',
                            },
                        }}
                    >
                        Download PDF
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Center vertically
                    maxWidth: '100%',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                    Preview
                </Typography>
                <Box ref={templateRef} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Preview selectedTemplate={selectedTemplate} resumeData={resumeData} />
                </Box>
            </Box>
        </Container>
    );
};

export default PreviewPage;
