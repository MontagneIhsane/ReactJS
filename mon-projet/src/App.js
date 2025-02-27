import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./components/Navbar";
import PlantCollection from "./components/PlantCollection";
import PlantDetails from "./components/Details";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const theme = useSelector((state) => state.theme); // Récupérer le thème depuis Redux

  return (
    <div className={theme}>
      <Router>
        <Navigation />
        <ThemeToggle /> {/* Bouton pour changer le thème */}
        <Routes>
          <Route path="/" element={<PlantCollection />} />
          <Route path="/plant/:id" element={<PlantDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
