// import { LOGIN , LOGOUT } from './Types'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const loginUser = (id) => {
    return {
        type: LOGIN,
        id
    }
}

export const logOutUser = () => {
    return { 
        type: LOGOUT
    }
}