import { Link } from "react-router-dom";

function Home() {
  const logged = localStorage.getItem("logged");
  let linkR = logged === "true" ? "/Resume" : "/Login";
  let linkC = logged === "true" ? "/Coverletter" : "/Login";
  return (
    <div className="home">
      <h1>Resumenes</h1>
      <div className="buttons">
        <Link to={linkR}>Create Resume</Link>
        <Link to={linkC}>Create Coverletter</Link>
      </div>
      <footer>
        <Link to="/About">About</Link>
        <hr />
      </footer>
    </div>
  );
}

export default Home;