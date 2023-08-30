import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resmhtml from './Resmhtml';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Resume' element={<Home/>}/>
          <Route path='/Coverletter' element={<Home/>}/>
          <Route path='/About' element={<Resmhtml/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;

