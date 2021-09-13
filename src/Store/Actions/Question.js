// import { SAVE_Q_ANS , SAVE_Q , RECEIVE_Q } from "./Types";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const addQuestion = (q) => {
    return {
        type: SAVE_QUESTION,
        q
    }
}

export const questionAnswer = (user, qid, ans) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        user,
        qid,
        ans
    }
}

export const receiveQuestions = (q) => {
    return {
        type: RECEIVE_QUESTIONS,
        q
    }
}