import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../Actions/Users';

const users = (state = {}, action) => {
    switch(action.type) {
        case SAVE_USER_QUESTION: {
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        }

        case SAVE_USER_ANSWER: {
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
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