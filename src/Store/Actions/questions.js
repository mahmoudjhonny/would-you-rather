import { RECEIVE_QUESTIONS , SAVE_QUESTION_ANSWER , SAVE_QUESTION } from "./Types";

export const addQuestion = (question) => {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export const questionAnswer = (info) => {
    return {
        type: SAVE_QUESTION_ANSWER,
        auth: info.auth,
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