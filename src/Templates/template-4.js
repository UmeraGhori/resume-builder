import React from 'react';
import { Box, Typography, Paper, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Template4 = ({ data }) => {
    const { personal, workExperience, education, skills } = data;
    const educationList = Array.isArray(education) ? education : [education];

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, margin: '0 auto' }}>
            <Box display="flex" alignItems="center" mb={2} sx={{ backgroundColor: 'pink', padding: 2, borderRadius: 2 }}>
                <Avatar
                    src={personal.profileImage}
                    alt={`${personal.firstName} ${personal.lastName}`}
                    sx={{ width: 80, height: 80, mr: 2 }}
                />
                <Box>
                    <Typography variant="h4" fontWeight="bold" color="white">
                        {personal.firstName.toUpperCase()} {personal.lastName.toUpperCase()}
                    </Typography>
                </Box>
            </Box>
            <Box mb={4} sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Professional Summary
                </Typography>
                <Typography>{personal.objectives}</Typography>
            </Box>
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Work Experience
                </Typography>
                {workExperience.map((experience, index) => (
                    <Box key={index} mb={2} sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {experience.title} - {experience.company}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {experience.startDate} - {experience.endDate}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Education
                </Typography>
                {educationList.map((edu, index) => (
                    <Box key={index} mb={2} sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {edu.degree} - {edu.university}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {edu.startYear} - {edu.endYear}
                        </Typography>
                        <Typography>{edu.description}</Typography>
                    </Box>
                ))}
            </Box>
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Skills
                </Typography>
                <List>
                    {skills.map((skill, index) => (
                        <ListItem key={index} sx={{ padding: 0 }}>
                            <ListItemText primary={skill} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Contact
                </Typography>
                <Divider sx={{ mb: 2, bgcolor: 'pink' }} />
                <Box display="flex" alignItems="center">
                    <Phone sx={{ mr: 1 }} />
                    <Typography>{personal.mobile}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Email sx={{ mr: 1 }} />
                    <Typography>{personal.email}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <LocationOn sx={{ mr: 1 }} />
                    <Typography>{personal.address}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Template4;
