import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { setPersonalInfo } from '../redux/resumeSlice';
import { useNavigate } from 'react-router-dom';

const Personal = ({ setCurrentStep }) => {
  // Redux hooks
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.resume.personal);

  // Ref for file input
  const fileInputRef = useRef(null);

  // Hook for navigation
  const navigate = useNavigate();

  // State to manage form validation errors
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Validation function for form fields
  const validate = (name, value) => {
    switch (name) {
      case 'firstName':
        return value ? '' : 'First Name is required';
      case 'lastName':
        return value ? '' : 'Last Name is required';
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format';
      default:
        return '';
    }
  };

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validate(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
    // Dispatch action to update Redux state
    dispatch(setPersonalInfo({ [name]: value }));
  };

  // Handler for file input changes (profile image upload)
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Dispatch action to update Redux state with the profile image
        dispatch(setPersonalInfo({ profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for clicking on the profile image (triggers file input click)
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handler for moving to the next step in the form
  const handleNext = () => {
    const requiredFields = ['firstName', 'lastName', 'email'];
    const newErrors = {};

    // Validate required fields
    requiredFields.forEach((field) => {
      const value = personal[field];
      const errorMessage = validate(field, value);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
    } else {
      setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
    }
  };

  // Handler for going back to the home page
  const handleBack = () => {
    navigate('/');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', overflow: 'hidden', px: 2 }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box
          sx={{
            padding: { xs: '16px', sm: '24px', md: '32px' }, // Responsive padding
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '100%',
            margin: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          {/* Profile Image Circular Frame */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: { xs: 2, sm: 3 }, // Responsive margin-bottom
            }}
          >
            <Box
              sx={{
                width: { xs: 80, sm: 100 }, // Responsive width
                height: { xs: 80, sm: 100 }, // Responsive height
                borderRadius: '50%',
                border: '2px solid #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${personal.profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mb: 1, // Space between the circle frame and the button
              }}
            ></Box>
            {/* Hidden file input for profile image */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleFileChange}
            />
            {/* Typography for clickable profile photo upload */}
            <Typography
              sx={{
                color: '#007bff', // Blue text color
                cursor: 'pointer',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              onClick={handleImageClick}
            >
              Profile photo
            </Typography>
          </Box>

          {/* Form Fields */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First name"
                  name="firstName"
                  value={personal.firstName}
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last name"
                  name="lastName"
                  value={personal.lastName}
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  value={personal.email}
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="mobile"
                  value={personal.mobile}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={personal.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={personal.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={personal.state}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Postal code"
                  name="postalCode"
                  value={personal.postalCode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <TextField
              label="Objective"
              name="objectives"
              value={personal.objectives}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              sx={{ mt: 2 }}
            />
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on small screens
              justifyContent: 'space-between',
              mt: 3,
              gap: 2,
            }}
          >
            {/* Back button to return to the home page */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleBack}
              fullWidth
              sx={{ maxWidth: '200px' }} // Constrain button width
            >
              Back
            </Button>
            {/* Next button to move to the next step */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              fullWidth
              sx={{ maxWidth: '200px' }} // Constrain button width
            >
              Next
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personal;
