import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { addWorkExperience, deleteWorkExperience } from '../redux/resumeSlice';

const Experience = ({ setCurrentStep }) => {
  const dispatch = useDispatch();
  const workExperience = useSelector((state) => state.resume.workExperience);

  const [forms, setForms] = useState(workExperience.length > 0 ? workExperience : [{
    title: '',
    company: '',
    startDate: '',
    endDate: ''
  }]);

  const [errors, setErrors] = useState({
    title: false,
    company: false,
    startDate: false,
    endDate: false,
  });

  const [experienceCount, setExperienceCount] = useState(forms.length || 1);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedForms = [...forms];
    updatedForms[index] = {
      ...updatedForms[index],
      [name]: value,
    };
    setForms(updatedForms);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleAdd = () => {
    if (experienceCount < 3) {
      setExperienceCount(experienceCount + 1);
      setForms([...forms, { title: '', company: '', startDate: '', endDate: '' }]);
    }
  };

  const handleDelete = (index) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
    setExperienceCount(experienceCount - 1);
    dispatch(deleteWorkExperience(index));
  };

  const handleSave = () => {
    let isValid = true;
    const updatedErrors = {
      title: false,
      company: false,
      startDate: false,
      endDate: false,
    };

    forms.forEach((form, index) => {
      if (!form.title) {
        updatedErrors.title = true;
        isValid = false;
      }
      if (!form.company) {
        updatedErrors.company = true;
        isValid = false;
      }
      if (!form.startDate) {
        updatedErrors.startDate = true;
        isValid = false;
      }
      if (!form.endDate) {
        updatedErrors.endDate = true;
        isValid = false;
      }
    });

    setErrors(updatedErrors);

    if (isValid) {
      forms.forEach((form) => {
        dispatch(addWorkExperience(form));
      });
      setCurrentStep(2);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', overflow: 'hidden'}}
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Box
          sx={{
            padding: '32px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '100%',
            margin: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
            position: 'relative',
            top: '20px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Work Experience
          </Typography>
          {forms.map((form, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="body2" gutterBottom>
                Experience {index + 1}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Job Title"
                    name="title"
                    value={form.title}
                    onChange={(e) => handleChange(e, index)}
                    error={errors.title && !form.title}
                    helperText={errors.title && !form.title ? 'Job Title is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Organization Name"
                    name="company"
                    value={form.company}
                    onChange={(e) => handleChange(e, index)}
                    error={errors.company && !form.company}
                    helperText={errors.company && !form.company ? 'Organization Name is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Start year"
                    name="startDate"
                    type="number"
                    value={form.startDate}
                    onChange={(e) => handleChange(e, index)}
                    error={errors.startDate && !form.startDate}
                    helperText={errors.startDate && !form.startDate ? 'Start year is required' : ''}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="End year"
                    name="endDate"
                    type="number"
                    value={form.endDate}
                    onChange={(e) => handleChange(e, index)}
                    error={errors.endDate && !form.endDate}
                    helperText={errors.endDate && !form.endDate ? 'End year is required' : ''}
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                {index === experienceCount - 1 ? (
                  <Button variant="contained" color="primary" onClick={handleAdd} disabled={experienceCount >= 3}>
                    Add new
                  </Button>
                ) : null}
              </Box>
              {forms.length > 1 && (
                <Box sx={{ mt: 2 }}>
                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button variant="contained" color="primary" onClick={() => setCurrentStep(0)}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Next
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Experience;
