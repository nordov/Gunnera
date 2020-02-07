import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SIGNUP_ERRORS
} from '../../actions/user_actions';


const usersReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser})
        case RECEIVE_SIGNUP_ERRORS:
            return Object.assign({}, oldState, {errors: action.errors});            
        default:
            return oldState;
    }

}

export default usersReducer;