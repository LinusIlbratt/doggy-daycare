import React from "react";
import './DogCard.css';

function DogCard({ name, breed, age, sex, chipNumber, owner, img }) {
    return (
        <div className="dog-card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>
        </div>
    );
}

export default DogCard;