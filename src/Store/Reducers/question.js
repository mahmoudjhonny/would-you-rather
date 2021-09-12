import { ADD_NEW_Q, RECEIVE_Q, SAVE_Q} from '../Actions/Types'

const questionReducer = (state = null , action) => {
    switch(action.type) {
        case ADD_NEW_Q: {
            return{
                ...state,
                [action.question.id]: action.question
            }
        }

        case RECEIVE_Q: {
            return {
                ...state,
                ...action.questions
            }
        }

        case SAVE_Q: {
            return{
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.user])
                    }
                }
            }
        }

        default: 
            return state
    }
}

export default questionReducer;