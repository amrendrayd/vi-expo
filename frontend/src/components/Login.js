import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginUser } from '../services/api'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log(response.data);
      
      localStorage.setItem('token', response.data.token);

      
      navigate('/'); 
    } catch (error) {
      alert('Login failed!');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;


