import React from 'react';
import { useSelector } from 'react-redux';
import Template1 from '../Templates/template-1';
import Template2 from '../Templates/template-2';
import Template3 from '../Templates/template-3';
import Template4 from '../Templates/template-4';


const Preview = ({ selectedTemplate }) => {
  const resumeData = useSelector((state) => state.resume);

  return (
    <div>
      {selectedTemplate ? ( 
        <>
          {selectedTemplate.id === 1 && <Template1 data={resumeData} />}
          {selectedTemplate.id === 2 && <Template2 data={resumeData} />}
          {selectedTemplate.id === 3 && <Template3 data={resumeData} />}
          {selectedTemplate.id === 4 && <Template4 data={resumeData} />} 
        </>
      ) : (
        <p>Please select a template from the Templates page.</p>
      )}
    </div>
  );
};

export default Preview;