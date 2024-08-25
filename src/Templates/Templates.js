import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TemplateCard from './TemplateCard';
import './Templates.css'; 
import sample1 from '../images/sample_1.png';
import sample2 from '../images/sample_2.png';
import sample3 from '../images/sample_3.png';
import sample4 from '../images/sample_4.png';

const templates = [
    { id: 1, name: 'Template 1', image: sample1 },
    { id: 2, name: 'Template 2', image: sample2 },
    { id: 3, name: 'Template 3', image: sample3 },
    { id: 4, name: 'Template 4', image: sample4 },
];

const Templates = () => {
    const navigate = useNavigate();

    const handleTemplateSelect = (template) => {
        navigate('/details', { state: { selectedTemplate: template } });
    };

    return (
        <Container className="templates-container">
            <Typography 
                variant="h4" 
                align="center" 
                gutterBottom 
                style={{ 
                    fontWeight: 'bold', 
                    marginTop: '40px',
                }}>
                Templates
            </Typography>
            <Typography 
                variant="subtitle1" 
                align="center" 
                gutterBottom 
                style={{ 
                    color: '#555',
                    marginBottom: '30px'
                }}>
                Select a Template to get Started
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {templates.map(template => (
                    <Grid item xs={12} sm={6} md={3} key={template.id} className="template-container">
                        <TemplateCard template={template} />
                        <button
                            className="use-template-button"
                            onClick={() => handleTemplateSelect(template)}
                        >
                            Use Template
                        </button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Templates;
