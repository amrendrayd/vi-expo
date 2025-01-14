
import axios from 'axios';

const API_URL = 'http://localhost:6500/api'; 


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data; 
  } catch (error) {
    throw new Error('Error logging in'); 
  }
};


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data; 
  } catch (error) {
    throw new Error('Error registering user'); 
  }
};


