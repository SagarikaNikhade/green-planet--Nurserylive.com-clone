import axios from 'axios';
import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  GET_ORDERS_SUCCESS,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_SUCCESS,
} from './actionTypes';

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

// Create order
export const createOrder = (orderData) => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.post('/orders', orderData);
    dispatch({
      type: ORDER_SUCCESS,
      payload: res.data.data,
    });
    return res.data.data;
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error creating order',
    });
    throw error;
  }
};

// Get user orders
export const getUserOrders = () => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.get('/orders');
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error fetching orders',
    });
  }
};

// Get single order
export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.get(`/orders/${orderId}`);
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error fetching order',
    });
  }
};

// Update order status (admin only)
export const updateOrderStatus = (orderId, status) => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.put(`/orders/${orderId}`, { status });
    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error updating order',
    });
  }
};

// Cancel order
export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.put(`/orders/${orderId}/cancel`);
    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error cancelling order',
    });
  }
};

// Get all orders (admin)
export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: ORDER_REQUEST });
  try {
    const res = await api.get('/orders/admin/all');
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAILURE,
      payload: error.response?.data?.message || 'Error fetching orders',
    });
  }
};
