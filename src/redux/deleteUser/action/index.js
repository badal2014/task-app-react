import * as action from '../../action';
import fireAjax from "../../../fireajax";

export function deleteUser(payload){
    console.log(payload);
    
    return dispatch => {
        if(payload == undefined){
            dispatch(action.deleteUserClear())
        }else{
            dispatch(action.deleteUserBegin())
            return fireAjax('DELETE' , `https://app-task12.herokuapp.com/users/me`)
            .then((result) => {
                
                if(result.status == 200){
                    console.log(result.status == 200 ,"result");
                    dispatch(action.deleteUserSuccess(result.data))
                }
            })
            .catch((e) => {
                dispatch(action.deleteUserError(e))                    
            })
        }
    }
}