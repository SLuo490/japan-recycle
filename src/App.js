import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, About } from './pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
