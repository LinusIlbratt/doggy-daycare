import React from "react"
import { useParams } from 'react-router-dom'

function DogDetails({ dogs }) {
    const { chipNumber } = useParams()  // Hämta chipNumber från URL:en
    console.log('ChipNumber from URL:', chipNumber);  // Logga chipNumber från URL
    console.log('All Dogs:', dogs);  // Logga alla hundar från props

    // Jämför chipNumber från URL med chipNumber i datan, säkerställ att båda är strängar
    const dog = dogs.find(d => String(d.chipNumber) === String(chipNumber));  
    console.log('Found Dog:', dog);  // Logga om rätt hund hittas

    if (!dog) {
        return <p>Dog not found</p>  // Visa meddelande om ingen hund hittas
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
