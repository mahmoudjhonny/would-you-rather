import { RECEIVE_QUESTIONS , ANSWER_QUESTION , ADD_QUESTION } from "./Types";

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
export const addQuestion = ({id, timestamp, author, optionOne, optionTwo}) => {
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

export const addAnswer = ({auth, qid, answer}) => {
    return {
        type: ANSWER_QUESTION,
        auth,
        qid,
        answer
    }
}

