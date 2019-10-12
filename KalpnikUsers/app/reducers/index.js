import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';

const rootReducer = combineReducers({
    Users: UsersReducer,
});

export default rootReducer;