import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Korrekt importering av navigate
import DogCard from './DogCard';

function DogList() {
  const [dogs, setDogs] = useState([]);    // State to store data
  const [loading, setLoading] = useState(true);  // State for loading
  const [error, setError] = useState(null); // State for errors
  const navigate = useNavigate(); // use to change the URL

  useEffect(() => {
    // Funktion för att hämta data från API
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66ea8f94ad19ca34f8a82e28');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogs(data.record);  // Save data from API in a state
        setLoading(false);     // When data is being collected, set loading to false
      } catch (error) {
        setError(error.message);
        setLoading(false);     // If an error occurs, show msg
      }
    };

    fetchDogs();  // Kör funktionen när komponenten mountas
  }, []);  // Empty dependecy list so useEffect only runs one time

  if (loading) {
    return <p>Loading...</p>;  // Show "Loading" while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>;  // Show error msg if something goes wrong
  }

  const handleCardClick = (dog) => {
    console.log('Clicked on:', dog);  // Kontrollera att klicket fungerar
    navigate(`/dog/${dog.chipNumber}`); // Navigera till hundens detaljer med chipNumber
  };

  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <DogCard
          key={dog.chipNumber}
          name={dog.name}
          sex={dog.sex}
          breed={dog.breed}
          age={dog.age}
          img={dog.img}
          chipNumber={dog.chipNumber}
          owner={dog.owner}
          onClick={() => handleCardClick(dog)}  // Öppna detaljsidan vid klick
        />
      ))}
    </div>
  );
}

export default DogList;
