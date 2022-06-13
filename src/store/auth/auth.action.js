import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "./auth.types";

export const login=(data)=>(dispatch)=> {
    dispatch({type:AUTH_LOADING});
    axios.post('https://reqres.in/api/login',{
        email:data.email,
        password:data.password
    })
    .then((r)=> {
        dispatch({type: AUTH_SUCCESS, payload:r.data})
    })
    .catch((er)=> {
        dispatch({type:AUTH_ERROR})
    })
}



export const logout=()=>({type:LOGOUT});