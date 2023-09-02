import{Link} from 'react-router-dom';

function About(){
    return (  
        <div className="About">
            <h2>
            Introducing Resumenes.com: Craft professional resumes with ease.
            Select from customizable templates, input your details, and witness real-time previews.
            Download or share your impressive resume in multiple formats,
            empowering you to stand out in the job market. Start building your career identity today and unlock new opportunities.
            </h2>
            <footer>
            <Link  to='/'>Home</Link>
            <hr/>
            </footer>
        </div>
    );
}
 
export default About;