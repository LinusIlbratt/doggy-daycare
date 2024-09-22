import React from "react";
import { Link } from 'react-router-dom';  // Använd React Router's Link
import './DogCard.css';

function DogCard({ name, breed, age, sex, chipNumber, img }) {
    return (
        <div className="dog-card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>

            {/* Länk till hundens detaljsida med chipNumber */}
            <Link to={`/dog/${chipNumber}`}>View Details</Link>
        </div>
    );
}

export default DogCard;
