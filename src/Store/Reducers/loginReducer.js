import { loginUser , logOutUser } from '../Actions/logInAction'

const loginReducer = (state = null , action) => {
    switch(action.type) {
        case loginUser: {
            return action.users
        }
        case logOutUser: {
            return null
        }
        default: {
            return state
        }
    }
}

export default loginReducer