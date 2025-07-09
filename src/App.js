import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AndreyPage from './Pages/AndreyPage';
import CharlesPage from './Pages/CharlesPage';
import NicolasPage from './Pages/NicolasPage';
import HomePage from './Pages/HomePage';
import EasterEggPage from './Pages/EasterEggPage';

import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
          <Link to="/andrey">Andrey</Link>
          <Link to="/charles">Charles</Link>
          <Link to="/nicolas">Nicolas</Link>
        </nav>

        <Routes>
          <Route path="/andrey" element={<AndreyPage />} />
          <Route path="/charles" element={<CharlesPage />} />
          <Route path="/nicolas" element={<NicolasPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/easteregg" element={<EasterEggPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
