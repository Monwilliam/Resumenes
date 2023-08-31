import html2canvas from 'html2canvas';
import {useRef} from 'react';


function Coverhtml() {
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