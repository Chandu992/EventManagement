import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Loginstyle.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token); 
      navigate('/');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className='chandu'>
        <div class="login-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <label for="username">Email</label>
      <input type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required ></input>
 
      <label for="password">Password</label>
      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
 
      <input type="submit" value="Login"></input>
    </form>
 
    <div className="links">
      <a href="#">Forgot Password?</a> | <a href="#">Sign up</a>
    </div>
  </div>
  
  </div>
  );
};

export default Login;
