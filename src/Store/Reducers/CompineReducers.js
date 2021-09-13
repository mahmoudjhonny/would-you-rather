import { combineReducers } from 'redux'
import users from './users'
import auth from './loginReducer'
import Questions from './questions'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    auth,
    users,
    Questions,
    loadingBar: loadingBarReducer
})
