import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants }) {
    return (
    <div className="list">
        {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
        ))}
    </div>
    );
}

export default PlantList;