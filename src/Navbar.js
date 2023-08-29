import { Link } from "react-router-dom";


function  Navbar() {
    return (  
        <nav className='navbar'>
        <h1>Welcome</h1>
        <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/'> About </Link></li>
            <li><Link to='/'> About </Link></li>
            <li><Link to='/'> About </Link></li>
        </ul>
    </nav>
    );
}
 
export default Navbar;