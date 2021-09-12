import {getAllData} from '../../API/DataApi'
import { receive_Q, handleAddNewQ, handleSaveAnsQ} from './Question'
import { recieveUser, addQ, handelSaveAnsOfUser} from './Users'

export const handleData = () => {
    return (dispatch) => {
        return getAllData().then(({user, ques}) => {
            dispatch(recieveUser(user))
            dispatch(receive_Q(ques))
        })
    }
}

export const handleSaveAns = (qid, ans) => {
    return (dispatch) => {
        dispatch(handleSaveAnsQ(qid, ans))
        dispatch(handelSaveAnsOfUser(qid, ans))
    }
}

export const handleAddQ = (firstOption, secondOption, user) => {
    return (dispatch) => {
        return dispatch(handleAddNewQ(firstOption, secondOption)).then((q) => {
            dispatch(addQ(user, q.q.id))
        })
    }
}