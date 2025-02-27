import { Link } from 'react-router-dom';

function PlantCard({ plant }) {
    return (
    <div className="card">
        <h3>{plant.common_name || 'Nom inconnu'}</h3>
        <p><strong>Espèce :</strong> {plant.scientific_name || 'Non disponible'}</p>
        <Link to={`/plant/${plant.id}`}>Voir Détails</Link>
    </div>
    );
}

export default PlantCard;
