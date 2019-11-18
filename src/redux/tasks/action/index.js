import * as action from '../../action';
import fireAjax from '../../../fireajax';

export function newTask(payload) {
    
    return dispatch => {
        if(payload == undefined){
            dispatch(action.createTaskClear())
        }
        else{

            dispatch(action.createTaskBegin());
            return fireAjax('POST', 'https://app-task12.herokuapp.com/tasks', payload)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(action.createTaskSuccess(result))
                    }
                })
                .catch((e) => {
                    dispatch(action.createTaskError(e))
                })
        }
    }
}
export function readTask(payload) {
    return dispatch => {
        if (payload === undefined) {
            dispatch(action.readTaskClear())
        } else {
            dispatch(action.readTaskBegin());
            return fireAjax('GET', 'https://app-task12.herokuapp.com/tasks/me')
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(action.readTaskSuccess(result.data))
                    }
                })
                .catch((e) => {
                    dispatch(action.readTaskError(e))
                })
        }
    }
}

export function updateTask(payload) {
    return dispatch => {
        if (payload === undefined) {
            dispatch(action.updateTaskClear())
        } else {
            let id = payload.id
            let final = {
                description: payload.description,
                completed: payload.completed
            }
            dispatch(action.updateTaskBegin());
            return fireAjax('PATCH', `https://app-task12.herokuapp.com/tasks/${id}`, final)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(action.updateTaskSuccess(result.data))
                    }
                })
                .catch((e) => {
                    dispatch(action.updateTaskError(e))
                })
        }
    }
}

export function deleteTask(payload) {
    return dispatch => {
        if (payload === undefined) {
            dispatch(action.deleteTaskClear())
        } else {
            let id = payload.id
           console.log(payload)
            dispatch(action.deleteTaskBegin());
            return fireAjax('DELETE', `https://app-task12.herokuapp.com/tasks/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        dispatch(action.deleteTaskSuccess(result.data))
                    }
                })
                .catch((e) => {
                    dispatch(action.deleteTaskError(e))
                })
        }
    }
}