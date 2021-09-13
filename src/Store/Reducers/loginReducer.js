import { LOGIN, LOGOUT } from '../Actions/authedUser'

const authedUserReducer = (state = null , action) => {
    switch(action.type) {
        case LOGIN: {
            return action.id
        }
        case LOGOUT: {
            return null
        }
        default: {
            return state
        }
    }
}

export default authedUserReducer