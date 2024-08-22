import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/customers')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the customers!', error);
            });
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer._id}>{customer.name} - {customer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
