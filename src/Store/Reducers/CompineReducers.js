import { combineReducers } from 'redux'
import User from './user'
import Questions from './question'
import Loginreducer from './loginReducer'

export default combineReducers({
    Loginreducer,
    User,
    Questions
})
