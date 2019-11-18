import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function loginData(payload){
    return dispatch => {
        if(payload == undefined){
            dispatch(action.loginClear())
        }else{
            dispatch(action.loginBegin())
            return fireAjax('POST' , 'https://app-task12.herokuapp.com/users/login' , payload)
            .then((result) => {
                if(result.status === 200){
                    sessionStorage.setItem('token' , result.data.token)
                    dispatch(action.loginSuccess(result.data))
                }else{
                    dispatch(action.loginError(result.data))
                }
            }).catch((error) => {
                dispatch(action.loginError(error))
            })
        }
    }
}