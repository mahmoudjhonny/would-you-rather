import {RECEIVE_USERS , SAVE_USER_ANSWER , SAVE_USER_QUESTION} from './Types'

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const userAnswer = (auth, qid, answer) => {
    return {
        type: SAVE_USER_ANSWER,
        auth,
        qid,
        answer
    }
}

export const userQuestion = (question) => {
    return {
        type: SAVE_USER_QUESTION,
        question
    }
}