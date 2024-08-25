import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const TemplateCard = ({ template }) => {

    return (
        <Card 
            style={{ maxWidth: 400, position: 'relative' }}
        >
            <CardMedia
                component="img"
                height="400"
                image={template.image}
                alt={template.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {template.name}
                </Typography>
            </CardContent>
            
        </Card>
    );
};

export default TemplateCard;
