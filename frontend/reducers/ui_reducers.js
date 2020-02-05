import { combineReducers } from 'redux';
import modalReducer from './ui/modal_reducers';

const uiReducer = combineReducers({
    modal: modalReducer
});

export default uiReducer;   