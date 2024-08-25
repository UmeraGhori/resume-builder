import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Preview from './Preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PreviewPage = () => {
  const location = useLocation();
  const { selectedTemplate, resumeData } = location.state || {};
  const templateRef = useRef(); 

  const generatePDF = () => {
    const input = templateRef.current;

    html2canvas(input, {
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('portrait', 'pt', 'a4');
      const imgWidth = 595.28;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      
      if (imgHeight > pdf.internal.pageSize.height) {
        const pageHeight = pdf.internal.pageSize.height;
        let heightLeft = imgHeight;
        
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
      }

      pdf.save('resume.pdf');
    });
  };

  return (
    <div>
      <h1>Preview</h1>
      <div ref={templateRef}>
        <Preview selectedTemplate={selectedTemplate} resumeData={resumeData} />
      </div>
      <button 
        onClick={generatePDF} 
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Download PDF
      </button>
    </div>
  );
};

export default PreviewPage;
