import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SIGNUP_ERRORS
} from '../../actions/users_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SIGNUP_ERRORS:
            return Object.assign({}, state, action.errors);            
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;