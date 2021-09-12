import {saveAnswer} from '../../API/DataApi'
import {RECEIVE_USERS , SAVE_Q , ADD_NEW_Q} from './Types'

export const recieveUser = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const saveAnswerQ = (user, qid, ans) => {
    return {
        type: SAVE_Q,
        user,
        qid,
        ans
    }
}

export const addQ = (user, qid) => {
    return {
        type: ADD_NEW_Q,
        user,
        qid
    }
}

export const handelSaveAnsOfUser = (qid, ans) => {
    return (dispatch, getState) => {
        const { user } = getState()
        return saveAnswer({user: user, qid, ans})
        .then(() => dispatch(saveAnswerQ(user, qid, ans)))
    }
}