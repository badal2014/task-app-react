import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function myProfile(payload) {
    return dispatch => {
        if (payload === undefined) {
            dispatch(action.myProfileClear())
        } else {
            dispatch(action.myProfileBegin());
            return fireAjax('GET', `https://app-task12.herokuapp.com/users/me`)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(action.myProfileSuccess(result.data))
                    }
                })
                .catch((e) => {
                    dispatch(action.myProfileError(e))
                })
        }
    }
}