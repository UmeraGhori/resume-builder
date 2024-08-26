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