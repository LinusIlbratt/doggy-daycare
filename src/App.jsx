import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import DogDetails from './pages/DogDetails';
import './App.css'

function App() {
  

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/dog/:id' element={<DogDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
