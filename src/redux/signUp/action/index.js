import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function signUp(payload){
    return dispatch => {
        if(payload == undefined){
            dispatch(action.signUpClear())
        }else{
            dispatch(action.signUpBegin())
            return fireAjax('POST' , 'https://app-task12.herokuapp.com/users' , payload)
            .then((result) => {
                if(result.status === 200){
                    dispatch(action.signUpSuccess(result.data))
                }else{
                    dispatch(action.signUpError(result.data))
                }
            }).catch((error) => {
                dispatch(action.signUpError(error))
            })
        }
    }
}