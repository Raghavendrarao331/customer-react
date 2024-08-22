import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';

const App = () => {
    return (
        <div>
            <h1>Customer Management</h1>
            <CustomerForm />
            <CustomerList />
        </div>
    );
};

export default App;
