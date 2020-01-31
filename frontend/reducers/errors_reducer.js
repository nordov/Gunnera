import { combineReducers } from 'redux';
import sessionErrors from './auth/session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrors
});

export default errorsReducer;