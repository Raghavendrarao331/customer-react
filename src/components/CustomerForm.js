import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/customers', { name, email })
            .then(response => {
                console.log('Customer added:', response.data);
                setName('');
                setEmail('');
            })
            .catch(error => {
                console.error('There was an error adding the customer!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
