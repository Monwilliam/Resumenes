import html2canvas from 'html2canvas';
import {useRef} from 'react';
import { useLocation } from "react-router-dom";


function Coverhtml() {
    const location = useLocation();
    const info = location.state;
    const cv = useRef();
    async function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "pt");
        await html2canvas(cv.current, {
            width: 500,
            height: 800,
        }).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 600, 890);
        });
        doc.save("Document.pdf");
    }
    return (  
        <div className="Coverhtml" >
            <div className="Coverpage" ref={cv}>
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