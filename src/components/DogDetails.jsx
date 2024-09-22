import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { chipNumber } = useParams();  // Hämta chipNumber från URL:en

  // Se till att hundlistan inte är tom innan vi försöker hitta rätt hund
  if (dogs.length === 0) {
    return <p>Loading...</p>;  // Visa ett meddelande om hunddatan inte är laddad än
  }

  const dog = dogs.find(d => d.chipNumber === chipNumber);  // Jämför chipNumber med URL-parametern

  if (!dog) {
    return <p>Dog not found</p>;  // Visa felmeddelande om ingen hund hittas
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Chip Number: {dog.chipNumber}</p>
      <h2>Owner Information</h2>
      <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
      <p>Phone: {dog.owner.phoneNumber}</p>
    </div>
  );
}

export default DogDetails;
