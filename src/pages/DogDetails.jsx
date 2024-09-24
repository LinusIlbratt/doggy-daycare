import React from "react"
import { useParams } from 'react-router-dom'
import './DogDetails.css'

function DogDetails({ dogs }) {
    const { chipNumber } = useParams()  
    console.log('ChipNumber from URL:', chipNumber);  
    console.log('All Dogs:', dogs);  

    
    const dog = dogs.find(d => String(d.chipNumber) === String(chipNumber));  
    console.log('Found Dog:', dog);  

    if (!dog) {
        return <p>Dog not found</p>  
    }

    return (
    <div className="dog-details">
      <img src={dog.img} alt={dog.name} />
      <h1>{dog.name}</h1>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Chip Number: {dog.chipNumber}</p>
      <h2>Owner Information</h2>
      <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
      <p>Phone: {dog.owner.phoneNumber}</p>
    </div>
    )
}

export default DogDetails; 
