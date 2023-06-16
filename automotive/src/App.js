import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' exact element={<Navbar />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sign-in' element={<Registration />} />
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
