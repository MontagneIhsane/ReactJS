import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/plant">Détails Plante</Link>
    </nav>
    );
}

export default Navigation;
