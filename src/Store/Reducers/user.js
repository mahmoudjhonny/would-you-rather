import { ADD_NEW_Q , SAVE_Q , RECEIVE_USERS } from "../Actions/Types";

const user = (state = {}, action) => {
    switch(action.type) {
        case ADD_NEW_Q: {
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: state[action.user].questions.concat(action.qid)
                }
            }
        }

        case SAVE_Q: {
            return{
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user].answers,
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

export default user