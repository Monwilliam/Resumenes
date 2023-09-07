import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { useLocation } from "react-router-dom";


function Coverhtml() {
    const location = useLocation();
    const info = location.state;
    const captureRef = React.useRef(null);
    const generatePDF = async () => {
        if (captureRef.current) {
          const contentWidth = captureRef.current.offsetWidth;
          const contentHeight = captureRef.current.offsetHeight;
      
          const pdf = new jsPDF('p', 'pt', [contentWidth, contentHeight]);
          let position = 0;
      
          const renderPage = async () => {
            const canvas = await html2canvas(captureRef.current, {
              y: position,
              scrollY: -position,
              windowWidth: contentWidth,
              windowHeight: contentHeight
            });
      
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            position -= contentHeight;
      
            if (position > -contentHeight) {
              pdf.addPage();
              await renderPage();
            } else {
              pdf.save('capture.pdf');
            }
          };
      
          await renderPage();
        }
      };
    return (  
        <div className="Coverhtml" >
            <div className="Coverpage" ref={captureRef}>
                <hr/>
                <div className='Header'>
                    <div className="left">
                        <h3>{info.Title}</h3>
                        <h1>{info.Name}</h1>
                    </div>
                    <div className="right">
                        <h4 className='f'>{info.Contact.address}</h4>
                        <h4>{info.Contact.tel}</h4>
                        <h4>{info.Contact.email}</h4>
                    </div>
                </div>
                <div className='cont'>
                    <div className="left">
                        <h4>{info.Employer.name}</h4>
                        <h4>{info.Employer.title}</h4>
                        <h4>{info.Employer.address}</h4>
                    </div>
                    <div className="right">
                        <h4>Dear {info.Employer.name},</h4>
                        <h4>
                            {info.Para1} 
                        </h4>
                        <h4>
                            {info.Para2}
                        </h4>
                        <h4 className='last'>Sincerely,</h4>
                        <h4 className='lastname'>{info.Name}</h4>
                    </div>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
}
 
export default Coverhtml;