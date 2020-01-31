import { combineReducers } from "redux";

import usersReducer from "./auth/users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;