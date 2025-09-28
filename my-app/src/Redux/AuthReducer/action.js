import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST, LOGOUT_SUCCESS, GET_CURRENT_USER_SUCCESS } from "./actionTypes";
import axios from "axios";

// Create axios instance for auth
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REQUEST });
  try {
    const res = await api.post('/auth/register', userData);
    
    // Store token in localStorage
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    
    dispatch({ 
      type: REGISTER_SUCCESS, 
      payload: { 
        user: res.data.user, 
        token: res.data.token 
      } 
    });
    
    return { success: true, message: 'Registration successful' };
  } catch (err) {
    console.log('Register error:', err);
    dispatch({ type: FAILURE });
    return { 
      success: false, 
      message: err.response?.data?.message || 'Registration failed' 
    };
  }
};

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: REQUEST });
  try {
    const res = await api.post('/auth/login', userData);
    
    // Store token in localStorage
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    
    dispatch({ 
      type: LOGIN_SUCCESS, 
      payload: { 
        user: res.data.user, 
        token: res.data.token 
      } 
    });
    
    return { success: true, message: 'Login successful' };
  } catch (err) {
    console.log('Login error:', err);
    dispatch({ type: FAILURE });
    return { 
      success: false, 
      message: err.response?.data?.message || 'Login failed' 
    };
  }
};

export const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: REQUEST });
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: FAILURE });
      return;
    }

    const res = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    dispatch({ 
      type: LOGIN_SUCCESS, 
      payload: { 
        user: res.data.user, 
        token: token 
      } 
    });
  } catch (err) {
    console.log('Get current user error:', err);
    // Clear invalid token
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: FAILURE });
  }
};

export const logoutUser = () => (dispatch) => {
  // Clear localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  dispatch({ type: LOGOUT_SUCCESS });
};

// Check if user is authenticated from localStorage
export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (token && user) {
    try {
      const userData = JSON.parse(user);
      dispatch({ 
        type: GET_CURRENT_USER_SUCCESS, 
        payload: userData 
      });
      console.log('Auth restored from localStorage:', userData);
    } catch (error) {
      console.error('Invalid user data in localStorage:', error);
      // Clear invalid data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Set as initialized even if no auth data
      dispatch({ type: 'AUTH_INITIALIZED' });
    }
  } else {
    console.log('No auth data found in localStorage');
    // Set as initialized even if no auth data
    dispatch({ type: 'AUTH_INITIALIZED' });
  }
};

