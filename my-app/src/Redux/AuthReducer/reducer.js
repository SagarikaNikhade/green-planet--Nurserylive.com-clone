import { REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, FAILURE, LOGOUT_SUCCESS, GET_CURRENT_USER_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isAuthenticated : false,
    isInitialized : false,
    token : "",
    user : null,
    users : [],
}

export const reducer = (state = initialState , {type , payload} ) =>{
  switch(type){
    case REQUEST :
        return {...state , isLoading:true}

    case REGISTER_SUCCESS :
        return {...state , isLoading:false, isAuthenticated: true, user: payload.user, token: payload.token}

    case LOGIN_SUCCESS : 
        return {...state, isLoading:false, isAuthenticated: true, user: payload.user, token: payload.token}  
        
    case GET_CURRENT_USER_SUCCESS:
        return {...state, isLoading: false, isAuthenticated: true, isInitialized: true, user: payload, token: localStorage.getItem('token') || ''}
        
    case LOGOUT_SUCCESS:
        return {...state, isLoading: false, isAuthenticated: false, isInitialized: true, user: null, token: ""}
        
    case FAILURE :
        return {...state, isLoading: false, isError: true, isInitialized: true}
    
    case 'AUTH_INITIALIZED':
        return {...state, isInitialized: true}
        
    default :
        return state
  }
}