import { 
    LOGIN_CURRENT_USER, 
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../../actions/session_actions';

const _nullSession = {
    id: null
}

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type){
        case LOGIN_CURRENT_USER:
            return Object.assign({}, {currentUser: action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, {errors: action.errors});
        default:
            return state;
    }
    

}

export default sessionReducer;