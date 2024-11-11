import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    
    setErrors({});

    let formErrors = {};

    // Basic validation
    if (!username) formErrors.username = 'Username is required';
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/register', { username, email, password });
      alert('Registration Successful');
     
     setUsername('');
     setEmail('');
     setPassword('');
     setConfirmPassword('');
     setErrors({});

    
     navigate('/Register'); // This will refresh the registration form

    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="form-container">
      <h3 style={{ textAlign: 'center' }}>Register</h3>

      <form onSubmit={handleRegister}>
       
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

      
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

      
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

 
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

     
        <div>
          <button type="submit">Register</button>
        </div>
      </form>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p className='a1'>
          Already have an account? <a href="/login" className='log'>Login here</a>
        </p>
      </div>

   
      <style>
        {`
          .form-container {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            width: 100%;
            max-width: 400px;
            margin: 30px auto;
            padding: 10px; /* Reduced padding to decrease the height */
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            height: auto;
          }

          h3 {
            text-align: center;
            margin-bottom: 10px; /* Reduced margin to save space */
            color: #333;
          }

          div {
            margin-bottom: 12px;
          }

          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
          }

          input[type="text"],
          input[type="email"],
          input[type="password"] {
            width: 100%;
            padding: 6px; /* Reduced padding to make inputs more compact */
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            background-color: #fff;
          }

          input[type="text"]:focus,
          input[type="email"]:focus,
          input[type="password"]:focus {
            border-color: #4CAF50;
            outline: none;
          }

          .a1 {
            color: #ff0000;
            font-size: 16px;
            margin-top: 5px;
          }

          button[type="submit"] {
            width: 100%;
            padding: 8px; /* Reduced padding */
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }

          button[type="submit"]:hover {
            background-color: #45a049;
          }

          a {
            color: white;
            text-decoration: none;
          }

          .log {
            color: black;
          }

          a:hover {
            text-decoration: none;
          }

          div > p {
            margin-top: 8px;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default Register;
