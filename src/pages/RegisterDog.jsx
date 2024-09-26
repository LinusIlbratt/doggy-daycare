import React, { useState } from 'react';
import './RegisterDog.css'

const RegisterDog = () => {
    console.log('RegisterDog component loaded');

    const [dogName, setDogName] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState('')
    const [chipNumber, setChipNumber] = useState('')
    const [owner, setOwner] = useState('')
    const [ownerPhone, setOwnerPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDog = { dogName, breed, age, chipNumber, owner, ownerPhone }
        console.log('New dog registered: ', newDog)
        // logic to send data to backend/API
    }


    return (
        <div className='register-page'>
            <h1>Register a new dog</h1>
            <div className='inputForm'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={dogName}
                            onChange={(e) => setDogName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Breed:</label>
                        <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Chip Number:</label>
                        <input
                            type="text"
                            value={chipNumber}
                            onChange={(e) => setChipNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Owner:</label>
                        <input
                            type="text"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Owner Phone Number:</label>
                        <input
                            type="text"
                            value={ownerPhone}
                            onChange={(e) => setOwnerPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register Dog</button>
                </form>
            </div>
        </div>

    );
}

export default RegisterDog;
