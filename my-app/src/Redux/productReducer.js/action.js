import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

// Create axios instance for products (no auth required for viewing)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProducts = (params = {}) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const res = await api.get('/products', { params });
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.data });
    return { payload: res.data }; // Return full response for pagination info
  } catch (err) {
    console.log('Get products error:', err);
    dispatch({ type: PRODUCT_FAILURE });
    throw err;
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const res = await api.get(`/products/${id}`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.data });
  } catch (err) {
    console.log('Get single product error:', err);
    dispatch({ type: PRODUCT_FAILURE });
  }
};

export const getProductCategories = () => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const res = await api.get('/products/categories');
    return res.data.data;
  } catch (err) {
    console.log('Get categories error:', err);
    dispatch({ type: PRODUCT_FAILURE });
  }
};

// Admin only functions
export const addProduct = (data) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const token = localStorage.getItem('token');
    const res = await api.post('/products', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: ADD_PRODUCT_SUCCESS });
    return res.data;
  } catch (err) {
    console.log('Add product error:', err);
    dispatch({ type: PRODUCT_FAILURE });
  }
};

export const editProduct = (dataObj, id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const token = localStorage.getItem('token');
    const res = await api.put(`/products/${id}`, dataObj, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: PATCH_PRODUCT_SUCCESS });
    return res.data;
  } catch (err) {
    console.log('Edit product error:', err);
    dispatch({ type: PRODUCT_FAILURE });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const token = localStorage.getItem('token');
    const res = await api.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: PATCH_PRODUCT_SUCCESS });
    return res.data;
  } catch (err) {
    console.log('Delete product error:', err);
    dispatch({ type: PRODUCT_FAILURE });
  }
};