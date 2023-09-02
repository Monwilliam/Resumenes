import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useLocation } from "react-router-dom";
import telelogo from './images/telephone.png';
import addresslogo from './images/address.png';
import emaillogo from './images/email.png';


function Resmhtml() {
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
        <div className='Resmhtml'>
            <div className="Respage" ref={cv}>
                <div className="Header">
                    <h1>{info.Name}</h1>
                    <h3>{info.Title}</h3>
                    <hr />
                </div>
                <div className="cont">
                    <div className="left-cont">
                        <h2 className='ex'>Experience</h2>
                        {info.Experiences.map((e, i) => (
                            <div key={i}>
                                <h3>{e.position}</h3>
                                <p>{e.compname}</p>
                                <p>{e.startdate}-{e.enddate}</p>
                                <p>{e.details}</p>
                            </div>
                        ))
                        }
                        <hr />
                        <h2>Education</h2>
                        {info.Education.map((e, i) => (
                            <div key={i}>
                                <p className="when">{e.startdate}-{e.enddate}</p>
                                <h3 className="edu">{e.school}</h3>
                                <p>{e.details}</p>
                            </div>
                        ))
                        }
                    </div>
                    <div className="right-cont">
                        <h2>Contact</h2>
                        <div className='contc-img'><p>{info.Contact.tel}</p><img className="icon" src={telelogo} alt="telephone icon"/></div>
                        <div className='contc-img'><p>{info.Contact.address}</p><img className="icon" src={addresslogo} alt="address icon"/></div>
                        <div className='contc-img'><p>{info.Contact.email}</p><img className="icon" src={emaillogo} alt="email icon"/></div>
                        <hr />
                        <h2>Summary</h2>
                        <p>{info.Summary}</p>
                        <hr />
                        <h2>Skills</h2>
                        <ul>
                        {info.Skills.map((e, i) => (
                            <div key={i}>
                                <li>{e}</li>
                            </div>
                        ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
}

export default Resmhtml;