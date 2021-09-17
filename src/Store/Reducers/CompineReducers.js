import { combineReducers } from 'redux'
import users from './users'
import auth from './loginReducer'
import questions from './questions'

export default combineReducers({
    auth,
    users,
    questions,
})
