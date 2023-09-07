import{Link} from 'react-router-dom';

function Home() {
    return (  
        <div className="home">
            <h1>Resumenes</h1>
            <div className="buttons">
            <Link  to='/Resume'>Create Resume</Link>
            <Link  to='/Coverletter'>Create Coverletter</Link>
            </div>
            <footer>
            <Link  to='/About'>About</Link>
            <hr/>
            </footer>
        </div>
    );
}
 
export default Home;