import React from "react";
import { Link } from 'react-router-dom';  
import './DogCard.css';

function DogCard({ name, breed, age, sex, chipNumber, img }) {
    return (
        <div className="dog-card">
            <img src={img} alt={name} />
            <h2>{name || 'Unknown Name'}</h2>
            <p>Breed: {breed || 'Unknown Breed'}</p>
            <p>Age: {age ? `${age} years` : 'Unknown Age'}</p>
            <p>Sex: {sex || 'Unknown Sex'}</p>

            <Link to={`/dog/${chipNumber}`}>View Details</Link> {/* Länka till DogDetails */}
        </div>
    );
}

export default DogCard;

