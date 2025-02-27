import React, { useState } from 'react';

function PlantCollection() {
    const [plants, setPlants] = useState([]);
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [description, setDescription] = useState('');

    const addPlant = (e) => {
    e.preventDefault();
    if (name && species && description) {
        const newPlant = { id: Date.now(), name, species, description };
        setPlants([...plants, newPlant]);
        setName('');
        setSpecies('');
        setDescription('');
    }
    };

    return (
    <div className="container">
        <h2 className="title">Collection de Plantes</h2>
        <form onSubmit={addPlant} className="form">
        <input 
            type="text" 
            placeholder="Nom" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="input" 
        />
        <input 
            type="text" 
            placeholder="Espèce" 
            value={species} 
            onChange={(e) => setSpecies(e.target.value)} 
            className="input" 
        />
        <textarea 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="textarea"
        ></textarea>
        <button type="submit" className="button">
            Ajouter Plante
        </button>
        </form>
        <ul className="list">
        {plants.map((plant) => (
            <li key={plant.id} className="list-item">
            <strong>{plant.name}</strong> ({plant.species}) - {plant.description}
            </li>
        ))}
        </ul>
    </div>
    );
}

export default PlantCollection;