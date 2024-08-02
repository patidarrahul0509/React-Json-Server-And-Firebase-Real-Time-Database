import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://669defe19a1bda368004c213.mockapi.io/api/v1/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user: ', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2 style={{backgroundColor:"lightblue",padding:"15px",margin:"15px 0px",color:"white"}}>User Details</h2>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ViewUser;
