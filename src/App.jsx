import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import DogDetails from './pages/DogDetails';
import './App.css'

function App() {
  const [dogs, setDogs] = useState([]);

  
  useEffect(() => {
    
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66ea8f94ad19ca34f8a82e28');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogs(data.record);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDogs();  
  }, []);  

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog dogs={dogs} />} />
          <Route path='/dog/:chipNumber' element={<DogDetails dogs={dogs} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

