import { LOGIN , LOGOUT } from './Types'

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