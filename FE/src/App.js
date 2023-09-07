import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Resmhtml from "./pages/Resmhtml";
import CoverLetter from "./pages/Coverletter";
import Coverhtml from "./pages/Coverhtml";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Resume" element={<Resume />} />
            <Route path="/Resume/Resmhtml" element={<Resmhtml />} />
            <Route path="/Coverletter" element={<CoverLetter />} />
            <Route path="/Coverletter/Coverhtml" element={<Coverhtml />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
