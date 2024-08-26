import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Container } from '@mui/material'; // Import Material-UI components
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for routing
import Personal from '../components/Personal'; // Import Personal component
import Experience from '../components/Experience'; // Import Experience component
import Education from '../components/Education'; // Import Education component
import Skills from '../components/Skills'; // Import Skills component
import Header from '../components/Header'; // Import Header component

// Define the steps for the multi-step form
const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTemplate } = location.state || {};

  const [activeStep, setActiveStep] = useState(0);
  const [profileImage, setProfileImage] = useState('');
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educationDetails, setEducationDetails] = useState({
    type: '',
    university: '',
    degree: '',
    startYear: '',
    endYear: ''
  });
  const [skills, setSkills] = useState(['']);
  const [errors, setErrors] = useState({});
  const [resumeData, setResumeData] = useState({
    personal: { firstName: '', lastName: '', email: '', mobile: '', address: '', city: '', state: '', postalCode: '', objectives: '' },
    workExperience: [],
    education: { type: '', university: '', degree: '', startYear: '', endYear: '' },
    skills: []
  });
  const [showPreviewButton, setShowPreviewButton] = useState(false);

  const handlePreview = () => {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData.personal, profileImage },
      workExperience: workExperiences,
      education: educationDetails,
      skills: skills,
    });
    navigate('/preview', { state: { selectedTemplate, resumeData } });
  };

  return (
    <>
      <Header /> {/* Render the Header component */}
      <Container maxWidth="md" sx={{ padding: '16px' }}>
        <Box sx={{ width: '100%' }}>
          {/* Stepper component to display progress through steps */}
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Conditional rendering of components based on the active step */}
          <Box sx={{ mt: 4 }}>
            {activeStep === 0 && (
              <Personal 
                profileImage={profileImage} 
                setProfileImage={setProfileImage}
                setCurrentStep={setActiveStep}
              />
            )}

            {activeStep === 1 && (
              <Experience 
                workExperiences={workExperiences}
                setWorkExperiences={setWorkExperiences}
                addWorkExperience={() => setWorkExperiences([...workExperiences, { title: '', company: '', startDate: '', endDate: '' }])}
                deleteWorkExperience={(index) => setWorkExperiences(workExperiences.filter((_, i) => i !== index))}
                setCurrentStep={setActiveStep}
              />
            )}

            {activeStep === 2 && (
              <Education 
                educationDetails={educationDetails}
                setEducationDetails={setEducationDetails}
                errors={errors}
                setErrors={setErrors}
                setCurrentStep={setActiveStep}
              />
            )}

            {activeStep === 3 && (
              <Skills 
                skills={skills}
                setSkills={setSkills}
                setCurrentStep={setActiveStep}
                showPreviewButton={showPreviewButton}
                setShowPreviewButton={setShowPreviewButton}
              />
            )}

            {/* Conditionally render the preview button if showPreviewButton is true */}
            {showPreviewButton && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button variant="contained" onClick={handlePreview} sx={{ width: '100%', maxWidth: '200px' }}>
                  Preview
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DetailsPage; // Export the DetailsPage component
