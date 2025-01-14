import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/pages/Home';
import Pokemon from './Components/pages/Pokemon';
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Accueil</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </Router>
    );
}

export default App;
