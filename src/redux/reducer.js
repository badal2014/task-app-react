import {combineReducers} from 'redux';
import login from './login/reducer';
import signUp from './signUp/reducer'


export default combineReducers({
    login,
    signUp
})