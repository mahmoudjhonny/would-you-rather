import { RECEIVE_USERS, ADD_QUESTION, ANSWER_QUESTION } from '../Actions/Types';

const users = (state = {}, action) => {
    switch(action.type) {
        case ADD_QUESTION: {
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat([action.id])
                }
            }
        }

        case ANSWER_QUESTION: {
            return{
                ...state,
                [action.auth]: {
                    ...state[action.auth],
                    answers: {
                        ...state[action.auth].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        }

        case RECEIVE_USERS: {
            return {
                ...state,
                ...action.users
            }
        }

        default: 
            return state
    }
}

export default users