import React, { useState } from 'react';
import './RegisterDog.css';

const RegisterDog = () => {
    console.log('RegisterDog component loaded');

    // State for form fields
    const [dogName, setDogName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [chipNumber, setChipNumber] = useState('');
    const [owner, setOwner] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');

    // State for error messages
    const [errors, setErrors] = useState({});

    // Validate form input
    const validateForm = () => {
        const newErrors = {};

        if (!dogName.trim()) {
            newErrors.dogName = 'Dog name is required';
        }
        if (!breed.trim()) {
            newErrors.breed = 'Breed is required';
        }
        if (!age || isNaN(age)) {
            newErrors.age = 'Valid age is required';
        }
        if (!chipNumber.trim()) {
            newErrors.chipNumber = 'Chip number is required';
        }
        if (!owner.trim()) {
            newErrors.owner = 'Owner name is required';
        }
        if (!ownerPhone.trim() || !/^\d+$/.test(ownerPhone)) {
            newErrors.ownerPhone = 'Valid phone number is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            // If there are validation errors, update the state with errors
            setErrors(validationErrors);
        } else {
            // Clear errors if form is valid
            setErrors({});
            
            const newDog = { dogName, breed, age, chipNumber, owner, ownerPhone };
            console.log('New dog registered: ', newDog);

            // Here you would normally send the data to the backend/API
            
            // Reset form fields after submission
            setDogName('');
            setBreed('');
            setAge('');
            setChipNumber('');
            setOwner('');
            setOwnerPhone('');

            // Show a popup to confirm registration
            alert('Dog is registered');
        }
    };

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
                        {errors.dogName && <p className="error">{errors.dogName}</p>}
                    </div>

                    <div className="form-group">
                        <label>Breed:</label>
                        <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                        {errors.breed && <p className="error">{errors.breed}</p>}
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="text"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <p className="error">{errors.age}</p>}
                    </div>

                    <div className="form-group">
                        <label>Chip Number:</label>
                        <input
                            type="text"
                            value={chipNumber}
                            onChange={(e) => setChipNumber(e.target.value)}
                        />
                        {errors.chipNumber && <p className="error">{errors.chipNumber}</p>}
                    </div>

                    <div className="form-group">
                        <label>Owner:</label>
                        <input
                            type="text"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        />
                        {errors.owner && <p className="error">{errors.owner}</p>}
                    </div>

                    <div className="form-group">
                        <label>Owner Phone Number:</label>
                        <input
                            type="text"
                            value={ownerPhone}
                            onChange={(e) => setOwnerPhone(e.target.value)}
                        />
                        {errors.ownerPhone && <p className="error">{errors.ownerPhone}</p>}
                    </div>

                    <button type="submit">Register Dog</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterDog;
