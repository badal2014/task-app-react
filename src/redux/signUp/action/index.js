import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function signUp(payload){
    console.log("in action" , payload)
    return disaptch => {
        disaptch(action.signUpBegin())
        return fireAjax('POST' , 'https://app-task12.herokuapp.com/users' , payload)
        .then((result) => {
            if(result.status == 200){
                console.log(result)
            }
        })
    }
}