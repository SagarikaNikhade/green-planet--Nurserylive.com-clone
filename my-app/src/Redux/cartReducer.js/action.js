import axios from "axios";
import {
  CART_REQUEST_DELETE,
  CART_REQUEST_FAILURE,
  CART_REQUEST_PENDING,
  CART_REQUEST_UPDATEDEC,
  CART_REQUEST_UPDATEINC,
  GET_CART_REQUEST_SUCCESS,
} from "./actionTypes";



export const getCart = (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  fetch("http://localhost:8080/cart")
        .then((res)=>res.json())
        .then((res)=>{
          dispatch({ type: GET_CART_REQUEST_SUCCESS, payload: res })})
        .catch((err)=>dispatch({ type: CART_REQUEST_FAILURE }))
};

export const updateCart = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity+1,total:prevtotal+price}
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.patch(`http://localhost:8080/cart/${id}`,body);
    console.log(res);
     dispatch({ type: CART_REQUEST_UPDATEINC});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};
export const updateCartDec = (id,prevtotal,price,prevquantity) => async (dispatch) => {
  let body={quantity:prevquantity-1,total:prevtotal-price}
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.patch(`http://localhost:8080/cart/${id}`,body);
    console.log(res);
     dispatch({ type: CART_REQUEST_UPDATEDEC});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};

export const deleteCart = (id) => async (dispatch) => {
  console.log("ID",id)
  dispatch({ type: CART_REQUEST_PENDING });
  try {
    let res = await axios.delete(`http://localhost:8080/cart/${id}`);
    console.log(res);
    dispatch({ type: CART_REQUEST_DELETE});
  } catch (err) {
    console.log(err)
    dispatch({ type: CART_REQUEST_FAILURE });
  }
};