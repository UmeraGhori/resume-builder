import React from 'react';
import { Box, Typography, Paper, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Template4 = ({ data }) => {
    const { personal, workExperience, education, skills } = data;
    const educationList = Array.isArray(education) ? education : [education];

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                maxWidth: '100%',
                width: '100%',
                margin: '0 auto',
                boxSizing: 'border-box',
            }}
        >
            <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                mb={2}
                sx={{ backgroundColor: 'pink', padding: 2, borderRadius: 2 }}
            >
                <Avatar
                    src={personal.profileImage}
                    alt={`${personal.firstName} ${personal.lastName}`}
                    sx={{
                        width: { xs: 60, sm: 80 },
                        height: { xs: 60, sm: 80 },
                        mb: { xs: 2, sm: 0 },
                        mr: { sm: 2 }
                    }}
                />
                <Box textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography variant="h5" fontWeight="bold" color="white">
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

            {/* Skills */}
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="#001F3F" gutterBottom>
                    Skills
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {skills.map((skill, index) => (
                        <ListItem key={index} sx={{ padding: 0 }}>
                            <ListItemText primary={skill} sx={{ textAlign: 'center' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            
            {/* Contact */}
            <Box mb={4}>
                <Typography variant="h6" fontWeight="bold" color="pink" gutterBottom>
                    Contact
                </Typography>
                <Divider sx={{ mb: 2, bgcolor: 'pink' }} />
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    gap={2}
                >
                    <Box display="flex" alignItems="center" mb={1} sx={{ width: '100%' }}>
                        <Phone sx={{ mr: 1 }} />
                        <Typography>{personal.mobile}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={1} sx={{ width: '100%' }}>
                        <Email sx={{ mr: 1 }} />
                        <Typography>{personal.email}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ width: '100%' }}>
                        <LocationOn sx={{ mr: 1 }} />
                        <Typography>{personal.address}</Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default Template4;
