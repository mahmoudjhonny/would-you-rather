import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../Actions/Types';

const questionsReducer = (state = {} , action) => {
    switch(action.type) {
        case ADD_QUESTION: {
            return{
                ...state,
                [action.id]: action
            }
        }

        case RECEIVE_QUESTIONS: {
            return {
                ...state,
                ...action.questions
            }
        }

        case ANSWER_QUESTION: {
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