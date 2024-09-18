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
            <p>Chip Number: {chipNumber}</p>
            <p>Owner: {owner.name} {owner.lastName}</p>
            <p>Phone: {owner.phoneNumber}</p>
        </div>
    );
}

export default DogCard;