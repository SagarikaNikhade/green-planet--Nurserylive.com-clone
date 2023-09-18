import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS,GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

export const addProduct = (data) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .post("https://drab-pink-prawn-belt.cyclic.cloud/plants", data)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: ADD_PRODUCT_SUCCESS})
        })
        .catch((err) => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}

export const getProducts = (paramobj) => (dispatch) =>{
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .get(" https://drab-pink-prawn-belt.cyclic.cloud/plants", paramobj)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: GET_PRODUCT_SUCCESS , payload:res.data})
        })
        .catch(() => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}

// export const getSingleProducts = (id) => (dispatch) =>{
//     dispatch({ type: PRODUCT_REQUEST })
//     axios
//         .get(`http://localhost:8080/plants/${id}`)
//         .then((res) => {
//             //  console.log(res.data)
//             dispatch({ type: GET_PRODUCT_SUCCESS , payload:res.data})
//         })
//         .catch(() => {
//             dispatch({ type: PRODUCT_FAILURE })
//         })
// }

export const editProduct = (dataObj , id) => (dispatch) =>{
    dispatch({ type: PRODUCT_REQUEST })
    return axios
        .patch(`https://drab-pink-prawn-belt.cyclic.cloud/plants/${id}`, dataObj)
        .then((res) => {
             console.log(res.data)
            dispatch({ type: PATCH_PRODUCT_SUCCESS})
        })
        .catch(() => {
            dispatch({ type: PRODUCT_FAILURE })
        })
}


export const addToCart = (image, title, price,category) => (dispatch) => {
    const cartData = { image, title, price,category, quantity: 1, total: price };
  
    dispatch({ type: PRODUCT_REQUEST });
  
    axios
      .post('https://drab-pink-prawn-belt.cyclic.cloud/cart', cartData)
      .then((res) => {
        console.log('cart', res);
        dispatch({ type: ADD_PRODUCT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };