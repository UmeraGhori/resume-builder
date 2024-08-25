import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Personal from '../components/Personal';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Header from '../components/Header';

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
      <Header />
      <Box sx={{ width: '100%', padding: '20px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

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

        {showPreviewButton && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button variant="contained" onClick={handlePreview}>
              Preview
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};


export default DetailsPage;
