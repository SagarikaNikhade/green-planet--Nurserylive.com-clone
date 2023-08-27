import { REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, FAILURE,} from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    auth : false,
    token : "",
    users : [],
}

export const reducer = (state = initialState , {type , payload} ) =>{
  switch(type){
    case REQUEST :
        return {...state , isLoading:true}

    case REGISTER_SUCCESS :
        return {...state , isLoading:false,}

    case LOGIN_SUCCESS : 
        return {...state,isLoading:false,auth:true,token:payload}  
        
    case FAILURE :
        return {...state,isLoading:false,isError:true}
    default :
        return state
  }
}