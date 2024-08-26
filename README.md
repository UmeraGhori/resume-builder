# Resume Builder Application

![Resume Builder Screenshot](images/homeSS.png)


## Overview
The Resume Builder is a web application that allows users to create professional resumes with ease. Users can fill in their personal information, experience, education, and skills, preview their resume in real-time, and download it as a PDF. The application is designed with a user-friendly interface and offers various resume templates to choose from.

### Features
- Multiple Resume Templates: Choose from various professionally designed resume templates.
- Real-Time Preview: See changes in real-time as you fill out the resume details.
- Sectional Form Input: Step-by-step input for personal information, experience, education, and skills.
- Downloadable PDF: Generate and download your resume as a PDF document.
- Responsive Design: Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.

### Tech Stack
- Frontend: React.js, Material-UI
- State Management: Redux
- Routing: React Router
- PDF Generation: jsPDF
- Form Handling: React Hook Form
- Styling: Material-UI, Custom CSS

### Installation

**Prerequisites**
- Node.js (v14.x or later)
- npm or yarn

**Clone the Repository**
git clone https://github.com/UmeraGhori/resume-builder.git
cd resume-builder

### Install Dependencies

Using npm:
npm install

Or with yarn:
yarn install

### Usage

Running the Application
To start the development server, 
run:
npm start


Or with yarn:
yarn start

The application will be available at http://localhost:3000.

### Building for Production

To build the project for production, 
run:
npm run build

Or with yarn:
yarn build

**The build files will be generated in the build directory**

### Project Structure

src/
│
├── components/          # Reusable components
│   ├── Header.js        # Header component used across pages
│   ├── Sidebar.js       # Sidebar component for form navigation
│   ├── FormInput.js     # Custom input component
│   └── ...              # Other components
│
├── pages/               # Page components
│   ├── HomePage.js      # Home page with template selection
│   ├── DetailPage.js    # Page for filling in resume details
│   ├── PreviewPage.js   # Resume preview and download page
│   └── AboutUsPage.js   # About Us page
│
├── redux/               # Redux setup
│   ├── store.js         # Redux store configuration
│   ├── resumeSlice.js   # Slice for managing resume state
│   └── ...
│
├── App.js               # Main application component
├── index.js             # Entry point for React
└── ...                  # Other files (CSS, assets, etc.)

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements
React.js
Material-UI
jsPDF
React Hook Form

### Contact
For any questions or feedback, feel free to reach out at umeraghori07@gmail.com