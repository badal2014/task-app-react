import {combineReducers} from 'redux';
import login from './login/reducer';
import signUp from './signUp/reducer';
import task from './tasks/reducer';
import profile from './profile/reducer';
import userStatus from './deleteUser/reducer';

export default combineReducers({
    login,
    signUp,
    task,
    profile,
    userStatus
})