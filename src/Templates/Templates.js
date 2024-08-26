// Import React library
import React from 'react';

// Import Material-UI components
import { 
  Grid, 
  Typography, 
  Container 
} from '@mui/material';

// Import react-router-dom hook
import { useNavigate } from 'react-router-dom';

// Import TemplateCard component
import TemplateCard from './TemplateCard';

// Import CSS file
import './Templates.css'; 

// Import sample images
import sample1 from '../images/sample_1.png';
import sample2 from '../images/sample_2.png';
import sample3 from '../images/sample_3.png';
import sample4 from '../images/sample_4.png';

// Define an array of template objects
const templates = [
  { id: 1, name: 'Template 1', image: sample1 },
  { id: 2, name: 'Template 2', image: sample2 },
  { id: 3, name: 'Template 3', image: sample3 },
  { id: 4, name: 'Template 4', image: sample4 },
];

// Define the Templates component
const Templates = () => {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Define a function to handle template selection
  const handleTemplateSelect = (template) => {
    // Navigate to the /details route and pass the selected template as state
    navigate('/details', { state: { selectedTemplate: template } });
  };

  // Return the JSX for the Templates component
  return (
    <Container className="templates-container">
      {/* Header section */}
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          mt: 4, 
          mb: 2,
        }}
      >
        Templates
      </Typography>
      <Typography 
        variant="subtitle1" 
        align="center" 
        gutterBottom 
        sx={{ 
          color: '#555', 
          mb: 4
        }}
      >
        Select a Template to get Started
      </Typography>

      {/* Grid container for template cards */}
      <Grid container spacing={3} justifyContent="center">
        {templates.map(template => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={template.id} className="template-container">
            {/* Template card component */}
            <TemplateCard template={template} />
            {/* Use template button */}
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

// Export the Templates component as the default export
export default Templates;
