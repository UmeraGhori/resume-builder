// redux/resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    objectives: '',
    profileImage: ''
  },
  workExperience: [],
  education: {
    type: '',
    university: '',
    degree: '',
    startYear: '',
    endYear: ''
  },
  skills: []
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo(state, action) {
      state.personal = { ...state.personal, ...action.payload };
    },
    addWorkExperience(state, action) {
      state.workExperience.push(action.payload);
    },
    updateWorkExperience(state, action) {
      const { index, data } = action.payload;
      state.workExperience[index] = data;
    },
    deleteWorkExperience(state, action) {
      state.workExperience = state.workExperience.filter((_, i) => i !== action.payload);
    },
    setEducation(state, action) {
      state.education = { ...state.education, ...action.payload };
    },
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    deleteSkill(state, action) {
      state.skills = state.skills.filter((_, i) => i !== action.payload);
    },
    setSkills(state, action) {
      state.skills = action.payload;
    }
  }
});

export const {
  setPersonalInfo,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  setEducation,
  addSkill,
  deleteSkill,
  setSkills
} = resumeSlice.actions;

export default resumeSlice.reducer;
