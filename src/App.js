import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume'; 
import About from './About';
import Resmhtml from './Resmhtml';
import CoverLetter from './Coverletter';
import Coverhtml from './Coverhtml';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Resume' element={<Resume/>}/>
          <Route path='/Resume/Resmhtml' element={<Resmhtml/>}/>
          <Route path='/Coverletter' element={<CoverLetter/>}/>
          <Route path='/Coverletter/Coverhtml' element={<Coverhtml/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

