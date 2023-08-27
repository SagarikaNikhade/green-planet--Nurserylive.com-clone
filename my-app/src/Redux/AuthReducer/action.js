import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST,} from "./actionTypes"
import axios from "axios";

export const registerUser = (data) => (dispatch) =>{
    dispatch({type:REQUEST})
    axios.post(` http://localhost:8080/users`,data)
    .then((res)=>{
        dispatch({type:REGISTER_SUCCESS})
        console.log(res)
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}

// login
export const loginUser = (userData) => (dispatch) =>{
    dispatch({type:REQUEST})
    return axios.get(` http://localhost:8080/users`,userData)
    .then((res)=>{
        const user = res.data
        const sucessLogin = user.find((el)=> el.email === userData.email &&  el.password === userData.password)
     if(sucessLogin){
        dispatch({type:LOGIN_SUCCESS,payload:sucessLogin})
     }else{
        dispatch({type:FAILURE})
        alert("wrong credientials !!")
     }
        
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}

