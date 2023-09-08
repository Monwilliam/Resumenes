import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {
  let logged = "false";
  let linkR = "/Login";
  let linkC = "/Login";
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("rgba(0,71,100,0.5)");
    } else {
      setBgColor("transparent");
    }
  };

  const handleclickb = () => {
    localStorage.setItem("userId",null);
    localStorage.setItem("logged","false");
  }

  const pressrescov= () => {
    logged= localStorage.getItem("logged");
    linkR = logged === "true" ? "/Resume" : "/Login";
    linkC = logged === "true" ? "/Coverletter" : "/Login";
    console.log(logged);
    console.log(localStorage.getItem("logged"));
    console.log(linkR);
  }
   

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
          <Link to={linkR} onClick={pressrescov}> Resume </Link>
        </li>
        <li>
          <Link to={linkC} onClick={pressrescov}> Coverletter </Link>
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
