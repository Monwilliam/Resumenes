import { Link,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {
  const logged = localStorage.getItem("logged");
  const linkR = logged === "true" ? "/Resume" : "/Login";
  const linkC = logged === "true" ? "/Coverletter" : "/Login";
  const [bgColor, setBgColor] = useState("transparent");
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("rgba(0,71,171,0.3)");
    } else {
      setBgColor("transparent");
    }
  };

  const handleclickb = () => {
    localStorage.setItem("userId", null);
    localStorage.setItem("logged", "false");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: bgColor }}>
      <h1>Welcome</h1>
      <ul >
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to={linkR}> Resume </Link>
        </li>
        <li>
          <Link to={linkC}> Coverletter </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Profile"> Profile </Link>
        </li>
        <li>
          <Link className="log" to="/Login"> Login </Link>
        </li>
        <li>
          <Link  onClick={handleclickb}> Logout  </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
