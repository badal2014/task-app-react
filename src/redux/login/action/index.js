import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function loginData(payload){
    console.log(payload)
    return dispatch => {
        dispatch(action.loginBegin())
        return fireAjax('POST' , 'https://app-task12.herokuapp.com/users/login' , payload)
        .then((result) => {
            if(result.status == 200){
                console.log("result.data" ,result.data.token)
                sessionStorage.setItem('token' , result.data.token)
                dispatch(action.loginSuccess(result.data))
            }else{
                dispatch(action.loginError(result.data))
            }
        })
    }
}