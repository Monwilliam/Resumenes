import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { useLocation } from "react-router-dom";


function Coverhtml() {
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
                        <h3>job</h3>
                        <h1>Name</h1>
                    </div>
                    <div className="right">
                        <h4 className='f'>Info</h4>
                        <h4>Info</h4>
                        <h4>Info</h4>
                        <h4>Info</h4>
                    </div>
                </div>
                <div className='cont'>
                    <div className="left">
                        <h4>Info</h4>
                        <h4>Info</h4>
                        <h4>Info</h4>
                        <h4>Info</h4>
                    </div>
                    <div className="right">
                        <h4>Dear Name,</h4>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi debitis velit laborum,
                             impedit assumenda. 
                        </h4>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi debitis velit laborum,
                             impedit assumenda. 
                        </h4>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </h4>
                        <h4 className='last'>Sincerelu,</h4>
                        <h4 className='lastname'>Name</h4>
                    </div>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
}
 
export default Coverhtml;