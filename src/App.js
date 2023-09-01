import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coverhtml from './Coverhtml';
import Resmhtml from './Resmhtml';
import Resume from './Resume'; 
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Coverletter' element={<Home/>}/>
          <Route path='/About' element={<Resmhtml/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

