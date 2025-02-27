import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlantDetails() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPlantDetails = async () => {
        try {
        const response = await fetch(
            `https://trefle.io/api/v1/plants/${id}?token=p_sSheXvqmHOozx2u_gWO7V4lwn82LNl0flDYNP5liw©`
        );

        if (!response.ok) {
            throw new Error('Erreur lors du chargement des détails');
        }

        const data = await response.json();
        setPlant(data.data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    fetchPlantDetails();
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
    if (!plant) return <p>Plante non trouvée</p>;

    return (
    <div className="plant-details">
        <h2>{plant.common_name || 'Nom inconnu'}</h2>
        <p><strong>Espèce :</strong> {plant.scientific_name || 'Non disponible'}</p>
        <p><strong>Description :</strong> {plant.observations || 'Aucune description'}</p>
        {plant.image_url && <img src={plant.image_url} alt={plant.common_name} />}
    </div>
    );
}

export default PlantDetails;
