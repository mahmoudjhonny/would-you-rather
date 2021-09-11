import { LOGIN , LOGOUT } from './Types'

export const loginUser = (user) => {
    return {
        type: LOGIN,
        user
    }
}

export const logOutUser = () => {
    return { 
        type: LOGOUT
    }
}