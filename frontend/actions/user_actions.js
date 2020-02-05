// ADD DELETE AND UPDATE WHEN WORKING ON PROFILE FEATURE
import { postUser } from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

// ADD DURING PROFILE FEATURE
//export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const signup = user => dispatch => postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)), error => { dispatch(receiveErrors(error)) });