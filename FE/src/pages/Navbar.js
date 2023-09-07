import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/Resume"> Resume </Link>
        </li>
        <li>
          <Link to="/Coverletter"> Coverletter </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Profile"> Profile </Link>
        </li>
        <li>
          <Link to="/Login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
