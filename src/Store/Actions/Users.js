// import {RECEIVE_USERS , SAVE_Q , SAVE_Q_ANS} from './Types'

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const userAnswer = (user, qid, ans) => {
    return {
        type: SAVE_USER_ANSWER,
        user,
        qid,
        ans
    }
}

export const userQuestion = (q) => {
    return {
        type: SAVE_USER_QUESTION,
        q
    }
}