import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { addSkill, deleteSkill, setSkills } from '../redux/resumeSlice'; // Import Redux actions
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for navigation and location

const Skills = ({ setCurrentStep }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);
  const [skill, setSkill] = useState(''); // State to store the current input for a new skill
  const [showArrow, setShowArrow] = useState(false); // State to control visibility of the arrow icon
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to access location state
  const { selectedTemplate, resumeData } = location.state || {}; // Extract state from location

  const handleAddSkill = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill));
      setSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };

  const handleSaveSkills = () => {
    dispatch(setSkills(skills));
    setShowArrow(true);
  };

  const handleArrowClick = () => {
    dispatch(setSkills(skills));
    navigate('/preview', { state: { selectedTemplate, resumeData } });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', overflow: 'hidden', px: 2, mt: -4 }} // Adjusted margin-top to move container upward
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={5}> {/* Increased width */}
        <Box
          sx={{
            padding: { xs: '16px', sm: '24px', md: '32px' }, // Responsive padding
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
            maxWidth: '100%',
            margin: 'auto',
            height: 'auto',
            minHeight: '400px', // Minimum height for larger container
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
            position: 'relative', // Relative positioning for the arrow icon
          }}
        >
          <Typography variant="h6" gutterBottom>
            Key Skills
          </Typography>
          <Grid container spacing={2}> {/* Added spacing between inputs */}
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    padding: '8px',
                    borderRadius: '4px',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Typography variant="body1">{skill}</Typography>
                  <IconButton onClick={() => handleDeleteSkill(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Grid>
            ))}
            {skills.length < 4 && (
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Add additional skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddSkill();
                    }
                  }}
                  margin="normal"
                />
              </Grid>
            )}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
            <Button
              onClick={handleAddSkill}
              sx={{
                textTransform: 'none',
                color: '#1976d2',
                padding: 0,
                minWidth: 'unset',
                marginTop: 1,
              }}
            >
              Add new
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="contained" color="primary" onClick={() => setCurrentStep(2)}>
              Back
            </Button>
            {!showArrow && (
              <Button variant="contained" color="primary" onClick={handleSaveSkills}>
                Done
              </Button>
            )}
          </Box>
          {showArrow && (
            <IconButton
              onClick={handleArrowClick}
              sx={{
                position: 'absolute',
                right: { xs: 10, sm: 20 }, // Adjust position on smaller screens
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                border: '1px solid #1976d2',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: 'white',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
