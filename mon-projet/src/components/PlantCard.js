import React from 'react';

function PlantCard({ plant }) {
    return (
    <div className="card">
        <h3>{plant.name}</h3>
        <p><strong>Espèce:</strong> {plant.species}</p>
        <p>{plant.description}</p>
    </div>
    );
}

export default PlantCard;