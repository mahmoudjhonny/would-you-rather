import { RECEIVE_USERS } from './Types'

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}