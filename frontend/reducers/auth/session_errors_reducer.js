import {
    LOGIN_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, state, action.errors);            
        case LOGIN_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;

// make the state [] so we can iterate and get the error messages