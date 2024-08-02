import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://669defe19a1bda368004c213.mockapi.io/api/v1/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user: ', error));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://669defe19a1bda368004c213.mockapi.io/api/v1/users/${id}`, user)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating user: ', error));
  };

  return (
    <div>
      <h2 style={{backgroundColor:"lightblue",padding:"15px",margin:"15px 0px",color:"white"}}>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: <input type="text" name="firstName" value={user.firstName} onChange={handleChange} /></label>
        <label>Last Name: <input type="text" name="lastName" value={user.lastName} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={user.email} onChange={handleChange} /></label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
