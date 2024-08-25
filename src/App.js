// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Resume from './images/Resume';
// import AboutUsPage from './pages/AboutUsPage';
// import DetailsPage from './pages/DetailsPage';
// import ResumePreview from './images/ResumePreview';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/resume" element={<Resume />} /> 
//                 <Route path="/about-us" element={<AboutUsPage />} />
//                 <Route path="/details" element={<DetailsPage />} />
//                 <Route path="/preview" element={<ResumePreview />}/>
//                 {/* Add more routes as needed */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import PreviewPage from './pages/PreviewPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage'
import About from './pages/AboutUsPage'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;