import React from "react";
import { Link } from 'react-router-dom';  
import './DogCard.css';

// Define a placeholder image URL for dogs without valid images
const placeholderImg = "https://via.placeholder.com/300x200?text=No+Image+Available"; 

function DogCard({ name, breed, age, sex, chipNumber, img }) {
    return (
        <div className="dog-card">
            {/* If img is missing or invalid, fallback to the placeholder image */}
            <img 
                src={img} 
                alt={name || "Dog without image"} 
                onError={(e) => { e.target.src = placeholderImg }} // Fallback to placeholder on error
            />
            <h2>{name || 'Unknown Name'}</h2>
            <p>Breed: {breed || 'Unknown Breed'}</p>
            <p>Age: {age ? `${age} years` : 'Unknown Age'}</p>
            <p>Sex: {sex || 'Unknown Sex'}</p>

            <Link to={`/dog/${chipNumber}`}>View Details</Link>
        </div>
    );
}

export default DogCard;
