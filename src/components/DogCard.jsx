import React from "react";
import './DogCard.css';

function DogCard({ name, breed, age, sex, chipNumber, owner, img, onClick }) {  // Lägg till onClick som prop
    return (
        <div className="dog-card" onClick={onClick}>  {/* Gör kortet klickbart */}
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>
        </div>
    );
}

export default DogCard;
