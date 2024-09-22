import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // Korrekt importering av navigate och useParams
import DogCard from './DogCard';

function DogList() {
  const [dogs, setDogs] = useState([]);    // State to store data
  const [loading, setLoading] = useState(true);  // State for loading
  const [error, setError] = useState(null); // State for errors
  const { chipNumber } = useParams(); // Use to fetch chipNumber from URL
  const navigate = useNavigate(); // use to change the URL
  const [selectedDog, setSelectedDog] = useState(null); // keep track of the selected dog

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

    fetchDogs();  // Run the function when the component is mounted
  }, []);  // Empty dependecy list so useEffect only runs one time

  useEffect(() => {
    if (chipNumber) {
      const dog = dogs.find(d => d.chipNumber === chipNumber); // find the correct dog with the chipnumber
      setSelectedDog(dog); // set the selected dog
    }
  }, [chipNumber, dogs]);

  if (loading) {
    return <p>Loading...</p>;  // Show "Loading" while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>;  // Show error msg if something goes wrong
  }

  const handleCardClick = (dog) => {
    console.log('Clicked on:', dog);  // Lägg till en logg här för att se om klicket fungerar
    setSelectedDog(dog);
    navigate(`/catalog/${dog.chipNumber}`);
  };
  

  const handleCloseModal = () => {
    setSelectedDog(null);
    navigate('/catalog');
  }

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
          isOpen={selectedDog?.chipNumber === dog.chipNumber}  // Kontrollera om modalen ska vara öppen
          onClick={() => handleCardClick(dog)}  // Öppna modalen vid klick
          onClose={handleCloseModal}  // Funktion för att stänga modalen
        />
      ))}

      {/* Hantera modal öppnad från URL */}
      {chipNumber && selectedDog && (
        <DogCard
          name={selectedDog.name}
          sex={selectedDog.sex}
          breed={selectedDog.breed}
          age={selectedDog.age}
          img={selectedDog.img}
          chipNumber={selectedDog.chipNumber}
          owner={selectedDog.owner}
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default DogList;
