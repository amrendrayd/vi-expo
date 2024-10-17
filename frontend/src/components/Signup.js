import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, email, password });
      console.log(response.data);
      
     
      localStorage.setItem('token', response.data.token);

     
      navigate('/'); 
    } catch (error) {
      alert('Signup failed!');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <label>Username</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;


