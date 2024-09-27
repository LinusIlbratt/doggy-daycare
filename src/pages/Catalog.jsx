import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DogCard from '../components/DogCard';
import TextFilter from '../components/TextFilter';
import BreedFilter from '../components/BreedFilter';
import './Catalog.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Catalog({ dogs }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the search params from URL
  const searchParams = new URLSearchParams(location.search);

  const [nameFilter, setNameFilter] = useState(searchParams.get('name') || '');
  const [breedFilter, setBreedFilter] = useState(searchParams.get('breed') || '');
  const [ageFilter, setAgeFilter] = useState(searchParams.get('age') || '');
  const [sexFilter, setSexFilter] = useState(searchParams.get('sex') || '');

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const updateURLParams = () => {
    const params = new URLSearchParams();
    if (nameFilter) params.set('name', nameFilter);
    if (breedFilter) params.set('breed', breedFilter);
    if (ageFilter) params.set('age', ageFilter);
    if (sexFilter) params.set('sex', sexFilter);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    updateURLParams();
  }, [nameFilter, breedFilter, ageFilter, sexFilter]);

  // Handle scroll visibility for the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <div className="filter-group">
            <TextFilter
              label="Search Name"
              value={nameFilter}
              onChange={setNameFilter}
              placeholder="Type dog name"
            />
          </div>

          <div className="filter-group">
            <label>Filter by Breed:</label>
            <BreedFilter
              breeds={uniqueBreeds}
              selectedBreed={breedFilter}
              setBreedFilter={setBreedFilter}
            />
          </div>

          <div className="age-sex-wrapper">
            <div className="age-filter">
              <label>Age:</label>
              <input
                type="text"
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                placeholder="Enter age"
              />
            </div>

            <div className="sex-filter">
              <label>Sex:</label>
              <select
                value={sexFilter}
                onChange={(e) => setSexFilter(e.target.value)}
              >
                <option value="">Both</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
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

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <div className="scroll-up-btn" onClick={scrollToTop}>
          <i className="fas fa-angle-up"></i>
        </div>
      )}

    </div>
  );
}

export default Catalog;
