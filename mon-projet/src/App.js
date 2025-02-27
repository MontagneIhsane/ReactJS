import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import PlantCollection from './components/PlantCollection';
import PlantDetails from './components/Details';

function App() {
  const [plants, setPlants] = useState([]); // Stockage des plantes ici

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<PlantCollection setPlants={setPlants} plants={plants} />} />
        <Route path="/plant/:id" element={<PlantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
