import html2canvas from 'html2canvas';
import {useRef} from 'react';


function Resmhtml() {
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
        <div className='Resm'>
            <div className="whpag" ref={cv}>
                <div className="Header">
                    <h1>Name</h1>
                    <h3>Job</h3>
                    <hr/>
                </div>
                <div className="cont">
                    <div className="left-cont">
                        <h2 className='ex'>Experience</h2>
                        <h3>headinfo</h3>
                        <p>almkan</p>
                        <p>when</p>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                        <h3>headinfo</h3>
                        <p >almkan</p>
                        <p >when</p>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                        <hr/>
                        <h2>Education</h2>
                        <p className="when">when</p>
                        <p className="edu">University<br/>info</p>
                        <p className="when">when</p>
                        <p className="edu">University<br/>info</p>
                        <p className="when">when</p>
                        <p className="edu">University<br/>info</p>
                    </div>
                    <div className="right-cont">
                        <h2>Contact</h2>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <hr/>
                        <h2>Summary</h2>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <p>info</p>
                        <hr/>
                        <h2>Skills</h2>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                    </div>
                </div>
            </div>
        <button onClick={generatePDF}>Download pdf</button>
        </div>
    );
}
 
export default Resmhtml;