// Import React library
import React from 'react';

// Import Material-UI components
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography 
} from '@mui/material';

// Define the TemplateCard component
const TemplateCard = ({ template }) => {
  // Return the JSX for the TemplateCard component
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', sm: 400 }, // Full width on small screens, max width of 400px on larger screens
        margin: 'auto', // Center the card horizontally
        position: 'relative',
        boxShadow: 3, // Add shadow for better visual separation
        overflow: 'hidden', // Hide overflowing content
      }}
    >
      {/* Card Media section */}
      <CardMedia
        component="img"
        height="auto" // Adjust height automatically based on image aspect ratio
        image={template.image}
        alt={template.name}
        sx={{
          width: '100%', // Ensure the image takes full width of the card
          objectFit: 'cover', // Cover the card area while preserving aspect ratio
        }}
      />
      
      {/* Card Content section */}
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{
            textAlign: 'center', // Center-align the text
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust font size for responsiveness
          }}
        >
          {template.name}
        </Typography>
      </CardContent>
      
    </Card>
  );
};

// Export the TemplateCard component as the default export
export default TemplateCard;
