import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { setEducation } from '../redux/resumeSlice';

const Education = ({ setCurrentStep }) => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    dispatch(setEducation({ [e.target.name]: e.target.value }));
  };

  const validateFields = () => {
    let tempErrors = {};
    if (!education.type) tempErrors.type = "Type is required";
    if (!education.university) tempErrors.university = "University is required";
    if (!education.degree) tempErrors.degree = "Degree is required";
    if (!education.startYear) tempErrors.startYear = "Start year is required";
    if (!education.endYear) tempErrors.endYear = "End year is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      setCurrentStep(3);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', overflow: 'hidden', p: 2 }}
    >
      <Grid item xs={12} sm={10} md={8} lg={7} xl={6}>
        <Box
          sx={{
            padding: { xs: '20px', sm: '28px', md: '36px' }, // Increase padding
            backgroundColor: '#fff',
            borderRadius: '12px', // Increase border-radius for a softer look
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Slightly stronger shadow for better depth
            border: '1px solid #e0e0e0',
            maxWidth: '100%',
            margin: 'auto',
            height: { xs: 'auto', md: '80vh' }, // Increase height for larger screens
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Education Details
          </Typography>
          <TextField
            fullWidth
            name="type"
            value={education.type || ''}
            onChange={handleChange}
            select
            SelectProps={{
              native: true,
            }}
            margin="normal"
            error={Boolean(errors.type)}
            helperText={errors.type}
          >
            <option value="">Select Type</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Doctorate">Doctorate</option>
          </TextField>
          <TextField
            fullWidth
            label="University"
            name="university"
            value={education.university || ''}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.university)}
            helperText={errors.university}
          />
          <TextField
            fullWidth
            label="Degree"
            name="degree"
            value={education.degree || ''}
            onChange={handleChange}
            margin="normal"
            error={Boolean(errors.degree)}
            helperText={errors.degree}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Year"
                name="startYear"
                type="number"
                value={education.startYear || ''}
                onChange={handleChange}
                margin="normal"
                error={Boolean(errors.startYear)}
                helperText={errors.startYear}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="End Year"
                name="endYear"
                type="number"
                value={education.endYear || ''}
                onChange={handleChange}
                margin="normal"
                error={Boolean(errors.endYear)}
                helperText={errors.endYear}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Next
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Education;
