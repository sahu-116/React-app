import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Crudoperation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        salary: ''
      });
    
      //const [responseMsg,setResponseMsg]= useState('');
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        fetchData();
      }, []);
      const [editMode, setEditMode] = useState(false);
      const [editId, setEditId] = useState(null);
    
    
      //Fetch all Data from the API
      const fetchData = () => {
        axios
          .get(`http://127.0.0.1:8000/api/fetchData`)
          .then((res) => {
            setUserData(res.data);
            console.log(userData[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
          // Update product
          axios
            .put(`http://127.0.0.1:8000/api/updateData/${editId}`, formData)
            .then((response) => {
              alert('User successfully updated!');
              setEditMode(false);
              setFormData({ name: '', email: '', password: '', age: '', salary: '' });
              fetchData();
            })
            .catch((error) => {
              console.error('Error updating data:', error);
              alert('Failed to update data.');
            });
        } else {
          // Create new product
          axios
          .post('http://127.0.0.1:8000/api/insertData', formData)
          .then((res) => {
            alert(res.data.message);
            //eslint-disable-next-line-norestricted-globals
            window.location.reload(true);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      };
    
    
      // const handelSubmit = (event) => {
    
      //   event.preventDefault();
      //   axios
      //     .post('http://127.0.0.1:8000/api/insertData', formData)
      //     .then((res) => {
      //       alert(res.data.message);
      //       //eslint-disable-next-line-norestricted-globals
      //       window.location.reload(true);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
      const editData = (id) => {
        axios
          .get(`http://127.0.0.1:8000/api/fetchData/${id}`)
          .then((response) => {
            const user = response.data;
            setFormData({name: user.name,
              email: user.email,
              password: user.password,
              age: user.age,
              salary: user.salary });
            setEditMode(true);
            setEditId(id);
            alert('Editing data: ' + user.name);
          })
          .catch((error) => {
            console.error('Error fetching user for edit:', error);
            alert('Failed to fetch user for edit.');
          });
      };
    
    
      //Fetching single data
      // const editData = (id) => {
      //   axios
      //     .get(`http://127.0.0.1:8000/api/updateData/${id}`)
      //     .then((response) => {
      //       const product = response.data;
      //       setFormData({ name: product.name, quantity: product.quantity, price: product.price });
      //       setEditMode(true);
      //       setEditId(id);
      //       alert('Editing product: ' + product.name);
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching product for edit:', error);
      //       alert('Failed to fetching product for edit.');
      //     });
      // };
    
      //Delete product
      const deleteData = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
          axios
            .delete(`http://127.0.0.1:8000/api/deleteData/${id}`)
            .then(() => {
              alert('Product successfully deleted!');
              // fetchproducts();
              window.location.reload(true);
            })
            .catch((error) => {
              console.error('Error deletiing product :', error);
              alert('Failed to delete product.');
            });
        }
      };
    
    return (
        <>
            <div style={{ margin: '50px' }}>
                <form method='post' onSubmit={handleSubmit}>

                    <label>Name:</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                    <br />
                    <label>Email:</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                    <br />
                    <label>Password:</label>
                    <input type='password' name='password' value={formData.password} onChange={handleChange} required />
                    <br />
                    <label>Age:</label>
                    <input type='number' name='age' value={formData.age} onChange={handleChange} required />
                    <br />
                    <label>Salary:</label>
                    <input type='number' name='salary' value={formData.salary} onChange={handleChange} required />
                    <br />
                    <input type='submit' name='btn' value='Register' />
                </form>

                <h2>All Users</h2>
                <table border='1' cellPadding='10' cellSpacing='0'>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.length > 0 ? (
                            userData.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>{user.salary}</td>
                                        <td>
                                            <button onClick={() => editData(user.id)}>Edit</button>
                                            <button onClick={() => deleteData(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan='5'>No Data available.</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
