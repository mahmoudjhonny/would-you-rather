import { ADD_NEW_Q , SAVE_Q , RECEIVE_Q } from "./Types";
import {addQuestion , saveAnswer} from '../../API/DataApi'

export const addNewQ = (q) => {
    return {
        type: ADD_NEW_Q,
        q
    }
}

export const saveQ = (user, qid, ans) => {
    return {
        type: SAVE_Q,
        user,
        qid,
        ans
    }
}

export const receive_Q = (q) => {
    return {
        type: RECEIVE_Q,
        q
    }
}

export const handleSaveAnsQ = (qid , ans) => {
    return (dispatch, getState) => {
        const { user } = getState()

        return saveAnswer({auth: user, qid, ans})
        .then(() => {
            dispatch(saveAnswer(user , qid , ans))
        })
    }
}

export const handleAddNewQ = (firstOption , SecondOption) => {
    return (dispatch , getState) => {
        const { user } = getState()
        return addQuestion({firstOption, SecondOption, user:user})
        .then((q) => dispatch(addNewQ(q)))
    }
}