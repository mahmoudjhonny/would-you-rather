// import { SAVE_Q_ANS , SAVE_Q , RECEIVE_Q } from "./Types";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const addQuestion = (question) => {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export const questionAnswer = (info) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser: info.authedUser,
        qid: info.qid,
        answer: info.answer
    }
}

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}