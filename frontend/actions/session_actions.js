import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const LOGIN_CURRENT_USER = 'LOGIN_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const loginCurrentUser = currentUser => ({
    type: LOGIN_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = user => dispatch => postSession(user)
    .then(user => dispatch(loginCurrentUser(user)), error => { dispatch(receiveErrors(error))});

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));


// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)

// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)