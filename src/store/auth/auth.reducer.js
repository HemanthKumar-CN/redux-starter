import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "./auth.types";

let token = localStorage.getItem("token");

const initState = {
    auth: {
        loading: false,
        error: false,
        isAuth: token ? true : false,
        token: ""
    }
}



export const authreducer = (state = initState, { type, payload }) => {
    console.log("before",state.auth.isAuth)
    switch (type) {
        case AUTH_LOADING: {

            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_SUCCESS: {

            localStorage.setItem("token", payload.token)
            
            return {
                ...state,
                // auth: {
                    // ...state.auth,
                    loading: false,
                    error: false,
                    isAuth: true,
                    token: payload.token,
                // }

            }
        }
        console.log("later",state.auth.isAuth)
        case AUTH_ERROR: {

            return {
                ...state,
                loading: false,
                error: true,
                isAuth: false,
                token: ""
            }
        }
        case LOGOUT: {
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: false,
                token: ""
            }
        }
        default: {
            return state
        }
    }
}