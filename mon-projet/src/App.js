import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import PlantCollection from './components/PlantCollection';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PlantCollection />} />
      </Routes>
    </Router>
  );
}

export default App;

