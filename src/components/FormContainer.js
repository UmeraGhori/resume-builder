import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const FormContainer = ({ onFileNameChange }) => {
    const [resumeName, setResumeName] = useState('');
    const [buttonColor, setButtonColor] = useState('#4CAF50'); // Initial button color (green)
    const [buttonOpacity, setButtonOpacity] = useState(1); // Initial opacity

    const handleSave = () => {
        if (onFileNameChange) {
            onFileNameChange(resumeName);
        }
        // Change button color and opacity when clicked
        setButtonColor('grey'); // Change to pink on click
        setButtonOpacity(0.5); // Reduce opacity
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                width: '100%',
                maxWidth: 400,
            }}
        >
            <Typography variant="h6" component="h2" gutterBottom>
                Create File Name
            </Typography>
            <TextField
                label="Resume Name"
                variant="outlined"
                fullWidth
                value={resumeName}
                onChange={(e) => setResumeName(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                onClick={handleSave}
                fullWidth
                sx={{
                    backgroundColor: buttonColor,
                    opacity: buttonOpacity,
                    '&:hover': {
                        backgroundColor: buttonColor === '#4CAF50' ? '#45a049' : 'pink', // Hover color based on initial color
                    },
                    '&:active': {
                        backgroundColor: buttonColor === '#4CAF50' ? '#388e3c' : 'pink', // Active color based on initial color
                    },
                }}
            >
                Save
            </Button>
        </Box>
    );
};

export default FormContainer;
