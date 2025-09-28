import axios from "axios";
import {
  CART_REQUEST_DELETE,
  CART_REQUEST_FAILURE,
  CART_REQUEST_PENDING,
  CART_REQUEST_UPDATEDEC,
  CART_REQUEST_UPDATEINC,
  GET_CART_REQUEST_SUCCESS,
} from "./actionTypes";

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Create axios instance with auth header
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCart = () => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.get('/cart');
    dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res.data.data.items });
  } catch (err) {
    console.log('Get cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const addToCart = (productId, quantity = 1) => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.post('/cart/items', { productId, quantity });
    dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res.data.data.items });
  } catch (err) {
    console.log('Add to cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const updateCart = (itemId, quantity) => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.put(`/cart/items/${itemId}`, { quantity });
    dispatch({ type: CART_REQUEST_UPDATEINC });
    // Refresh cart data
    dispatch(getCart());
  } catch (err) {
    console.log('Update cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const updateCartDec = (itemId, quantity) => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.put(`/cart/items/${itemId}`, { quantity });
    dispatch({ type: CART_REQUEST_UPDATEDEC });
    // Refresh cart data
    dispatch(getCart());
  } catch (err) {
    console.log('Update cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const deleteCart = (itemId) => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.delete(`/cart/items/${itemId}`);
    dispatch({ type: CART_REQUEST_DELETE });
    // Refresh cart data
    dispatch(getCart());
  } catch (err) {
    console.log('Delete cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    const res = await api.delete('/cart');
    dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: [] });
  } catch (err) {
    console.log('Clear cart error:', err);
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};