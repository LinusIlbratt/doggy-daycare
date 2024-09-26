import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Replace Navbar with Sidebar
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import DogDetails from './pages/DogDetails';
import RegisterDog from './pages/RegisterDog';
import './App.css';

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
        <Sidebar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog dogs={dogs} />} />
            <Route path="/register" element={<RegisterDog />} />
            {/* Pass the dogs array to the DogDetails route */}
            <Route path="/dog/:chipNumber" element={<DogDetails dogs={dogs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
