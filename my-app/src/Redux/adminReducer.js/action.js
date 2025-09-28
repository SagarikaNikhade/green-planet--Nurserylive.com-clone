import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USERS_REQUEST' });
    const res = await api.get('/admin/users');
    dispatch({
      type: 'GET_USERS_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_USERS_FAIL',
      payload: error.response?.data?.message || 'Error fetching users',
    });
  }
};

// Get user by ID
export const getUserById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USER_REQUEST' });
    const res = await api.get(`/admin/users/${userId}`);
    dispatch({
      type: 'GET_USER_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_USER_FAIL',
      payload: error.response?.data?.message || 'Error fetching user',
    });
  }
};

// Update user
export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_USER_REQUEST' });
    const res = await api.put(`/admin/users/${userId}`, userData);
    dispatch({
      type: 'UPDATE_USER_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'UPDATE_USER_FAIL',
      payload: error.response?.data?.message || 'Error updating user',
    });
  }
};

// Delete user
export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_USER_REQUEST' });
    await api.delete(`/admin/users/${userId}`);
    dispatch({
      type: 'DELETE_USER_SUCCESS',
      payload: userId,
    });
  } catch (error) {
    dispatch({
      type: 'DELETE_USER_FAIL',
      payload: error.response?.data?.message || 'Error deleting user',
    });
  }
};

// Get order statistics
export const getOrderStats = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ORDER_STATS_REQUEST' });
    const res = await api.get('/admin/stats/orders');
    dispatch({
      type: 'GET_ORDER_STATS_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ORDER_STATS_FAIL',
      payload: error.response?.data?.message || 'Error fetching order stats',
    });
  }
};

// Get product statistics
export const getProductStats = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_PRODUCT_STATS_REQUEST' });
    const res = await api.get('/admin/stats/products');
    dispatch({
      type: 'GET_PRODUCT_STATS_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_PRODUCT_STATS_FAIL',
      payload: error.response?.data?.message || 'Error fetching product stats',
    });
  }
};

// Get user statistics
export const getUserStats = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USER_STATS_REQUEST' });
    const res = await api.get('/admin/stats/users');
    dispatch({
      type: 'GET_USER_STATS_SUCCESS',
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_USER_STATS_FAIL',
      payload: error.response?.data?.message || 'Error fetching user stats',
    });
  }
};
