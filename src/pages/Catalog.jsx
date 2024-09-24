import React, { useState } from 'react';
import DogCard from '../components/DogCard';
import TextFilter from '../components/TextFilter';
import BreedFilter from '../components/BreedFilter';
import OtherFilters from '../components/OtherFilters';
import './Catalog.css';

function Catalog({ dogs }) {
  const [nameFilter, setNameFilter] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [sexFilter, setSexFilter] = useState('');

  const filteredDogs = dogs.filter((dog) => {
    return (
      dog.name.toLowerCase().startsWith(nameFilter.toLowerCase()) &&
      (breedFilter === '' || dog.breed.toLowerCase() === breedFilter.toLowerCase()) &&
      (ageFilter === '' || dog.age.toString() === ageFilter) &&
      (sexFilter === '' || dog.sex === sexFilter)
    );
  });
  
  const uniqueBreeds = [...new Set(dogs.map(dog => dog.breed))];

  return (
    <div className="catalog-page">
      <h1>Dog Catalog</h1>
  
      <div className="catalog-container">
        <div className="filter-form">
          <TextFilter
            label="Search Name"
            value={nameFilter}
            onChange={setNameFilter}
            placeholder="Type dog name"
          />
  
          <BreedFilter
            breeds={uniqueBreeds}
            selectedBreed={breedFilter}
            setBreedFilter={setBreedFilter}
          />
  
          <OtherFilters
            ageFilter={ageFilter}
            setAgeFilter={setAgeFilter}
            sexFilter={sexFilter}
            setSexFilter={setSexFilter}
          />
        </div>
  
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
    </div>
  );
  
}

export default Catalog;
