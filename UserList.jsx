import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://669defe19a1bda368004c213.mockapi.io/api/v1/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`https://669defe19a1bda368004c213.mockapi.io/api/v1/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user: ', error));
  };

  return (
    <div>
      <h1 style={{backgroundColor:"lightblue",padding:"15px",margin:"15px 0px",color:"white"}}>User List</h1>
      <Link to="/add" style={{backgroundColor:"black",padding:"15px",borderRadius:"15px",margin:"15px",color:"white"}}>Add User</Link>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`} className='update'>Update</Link>
                <button onClick={() => deleteUser(user.id)} className='delete'>Delete</button>
                <Link to={`/view/${user.id}`} className='view'>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
