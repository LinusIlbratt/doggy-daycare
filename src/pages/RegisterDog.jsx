import React, { useState } from 'react';

const RegisterDog = () => {
    console.log('RegisterDog component loaded');

    const [dogName, setDogName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [chipNumber, setChipNumber] = useState('')
    const [owner, setOwner] = useState ('')
    const [ownerPhone, setOwnerPhone] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDog = {dogName, breed, age, chipNumber, owner, ownerPhone}
        console.log('New dog registered: ', newDog)
        // logic to send data to backend/API
    }


    return (
        <div>
          <h2>Register a new dog</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            />
            <label>Breed:</label>
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Chipnumber:</label>
            <input
              type="text"
              value={chipNumber}
              onChange={(e) => setChipNumber(e.target.value)}
            />
            <label>Owner:</label>
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
            <label>Owner Phonenumber:</label>
            <input
              type="text"
              value={ownerPhone}
              onChange={(e) => setOwnerPhone(e.target.value)}
            />
            <button type="submit">Register Dog</button>
          </form>
        </div>
      );      
}

export default RegisterDog;
