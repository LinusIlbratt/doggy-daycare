import React, { useState } from 'react';
import DogCard from '../components/DogCard';

function Catalog({ dogs }) {
  const [breedFilter, setBreedFilter] = useState('');  // Enkelt state för att filtrera ras

  // Hantera förändringar i sökfältet
  const handleBreedChange = (e) => {
    setBreedFilter(e.target.value);
  };

  const filteredDogs = dogs.filter((dog) => {
    return dog.breed.toLowerCase().startsWith(breedFilter.toLowerCase());
  });
  
  

  return (
    <div className="catalog-page">
      <h1>Dog Catalog</h1>

      {/* Sökfält för ras */}
      <div className="filter-form">
        <label>
          Search Breed:
          <input
            type="text"
            name="breed"
            value={breedFilter}
            onChange={handleBreedChange}
            placeholder="Type breed name"
          />
        </label>
      </div>

      {/* Rendera filtrerade hundar */}
      <div className="dog-list">
        {filteredDogs.map((dog) => (
          <DogCard
            key={dog.chipNumber}
            name={dog.name}
            breed={dog.breed}
            age={dog.age}
            sex={dog.sex}
            img={dog.img}
            chipNumber={dog.chipNumber}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
