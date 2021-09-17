import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION } from '../Actions/Types';

const questionsReducer = (state = {} , action) => {
    switch(action.type) {
        case SAVE_QUESTION: {
            return{
                ...state,
                [action.question.id]: action.question
            }
        }

        case RECEIVE_QUESTIONS: {
            return {
                ...state,
                ...action.questions
            }
        }

        case SAVE_QUESTION_ANSWER: {
            return{
                ...state,
                [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                    ...state[action.qid][action.answer],
                votes: state[action.qid][action.answer].votes.concat([action.auth])
          }
                }
            }
        }

        default: 
            return state
    }
}

export default questionsReducer;