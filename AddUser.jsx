import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://669defe19a1bda368004c213.mockapi.io/api/v1/users', user)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding user: ', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: <input type="text" name="firstName" value={user.firstName} onChange={handleChange} /></label>
        <label>Last Name: <input type="text" name="lastName" value={user.lastName} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={user.email} onChange={handleChange} /></label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
