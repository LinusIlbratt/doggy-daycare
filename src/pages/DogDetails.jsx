import React from "react";
import { useParams } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
    const { chipNumber } = useParams();  
    console.log('ChipNumber from URL:', chipNumber);  
    console.log('All Dogs:', dogs);  

    const dog = dogs.find(d => String(d.chipNumber) === String(chipNumber));  
    console.log('Found Dog:', dog);  

    if (!dog) {
        return <p>Dog not found</p>;  
    }

    // Placeholder image if dog.img is missing or 404
    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/300?text=No+Image+Available";
    };

    return (
        <div className="dog-details">
            {/* Handle missing or broken image */}
            <img src={dog.img || "https://via.placeholder.com/300?text=No+Image+Available"} 
                 alt={dog.name || 'Unknown Dog'} 
                 onError={handleImageError} />

            {/* Handle missing dog information */}
            <h1>{dog.name || 'Unknown Name'}</h1>
            <p>Breed: {dog.breed || 'Unknown Breed'}</p>
            <p>Age: {dog.age ? `${dog.age} years` : 'Unknown Age'}</p>
            <p>Sex: {dog.sex || 'Unknown Sex'}</p>
            <p>Chip Number: {dog.chipNumber || 'Not available'}</p>

            {/* Handle missing owner information */}
            <h2>Owner Information</h2>
            <p>Owner: {dog.owner?.name || 'Unknown'} {dog.owner?.lastName || ''}</p>
            <p>Phone: {dog.owner?.phoneNumber || 'Not available'}</p>
        </div>
    );
}

export default DogDetails;
