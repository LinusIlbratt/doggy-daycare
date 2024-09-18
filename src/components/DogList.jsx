import React, { useState, useEffect } from 'react';
import DogCard from './DogCard';

function DogList() {
  const [dogs, setDogs] = useState([]);    // State för att lagra hunddata
  const [loading, setLoading] = useState(true);  // State för laddning
  const [error, setError] = useState(null); // State för eventuella fel

  useEffect(() => {
    // Funktion för att hämta data från API
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66ea8f94ad19ca34f8a82e28');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogs(data.record);  // Spara data från API i state
        setLoading(false);     // När data har hämtats, sätt loading till false
      } catch (error) {
        setError(error.message);
        setLoading(false);     // Om ett fel uppstår, visa felmeddelande
      }
    };

    fetchDogs();  // Kör funktionen när komponenten mountas
  }, []);  // Tom beroendelista så att useEffect bara körs en gång

  if (loading) {
    return <p>Loading...</p>;  // Visa "Loading" medan data hämtas
  }

  if (error) {
    return <p>Error: {error}</p>;  // Visa felmeddelande om något går fel
  }

  return (
    <div>
      {dogs.map((dog) => (
        <DogCard
          key={dog.chipNumber}   // Använd chipNumber som unikt ID
          name={dog.name}
          sex={dog.sex}
          breed={dog.breed}
          age={dog.age}
          img={dog.img}
          chipNumber={dog.chipNumber}
          owner={dog.owner}
        />
      ))}
    </div>
  );
}

export default DogList;
