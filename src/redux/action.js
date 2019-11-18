import * as constant from './constant';

export const loginBegin = () => ({
    type: constant.LOGIN_START
})
export const loginSuccess = (data) => ({
    type: constant.LOGIN_SUCCESS,
    payload: {data}
})
export const loginError = (error) => ({
    type: constant.LOGIN_ERROR,
    payload: {error}
})
export const loginClear = () => ({
    type: constant.LOGIN_CLEAR,
})

export const signUpBegin = () => ({
    type: constant.SIGNUP_START,
})
export const signUpSuccess = (data) => ({
    type: constant.SIGNUP_SUCCESS,
    payload: {data}
})
export const signUpError = (error) => ({
    type: constant.SIGNUP_ERROR,
    payload: {error}
})
export const signUpClear = () => ({
    type: constant.SIGNUP_CLEAR,
})

export const createTaskBegin = () => ({
    type: constant.CREATE_TASK_START,
})
export const createTaskSuccess = (data) => ({
    type: constant.CREATE_TASK_SUCCESS,
    payload: {data}
})
export const createTaskClear = () => ({
    type: constant.CREATE_TASK_CLEAR,
})
export const createTaskError = (error) => ({
    type: constant.CREATE_TASK_ERROR,
    payload: {error}
})

export const readTaskBegin = () => ({
    type: constant.READ_TASK_START,
})
export const readTaskSuccess = (data) => ({
    type: constant.READ_TASK_SUCCESS,
    payload: {data}
})
export const readTaskError = (error) => ({
    type: constant.READ_TASK_ERROR,
    payload: {error}
})
export const readTaskClear = () => ({
    type: constant.READ_TASK_CLEAR,
})

export const updateTaskBegin = () => ({
    type: constant.UPDATE_TASK_START,
})
export const updateTaskSuccess = (data) => ({
    type: constant.UPDATE_TASK_SUCCESS,
    payload: {data}
})
export const updateTaskError = (error) => ({
    type: constant.UPDATE_TASK_ERROR,
    payload: {error}
})
export const updateTaskClear = () => ({
    type: constant.UPDATE_TASK_CLEAR,
})

export const deleteTaskBegin = () => ({
    type: constant.DELETE_TASK_START,
})
export const deleteTaskSuccess = (data) => ({
    type: constant.DELETE_TASK_SUCCESS,
    payload: {data}
})
export const deleteTaskError = (error) => ({
    type: constant.DELETE_TASK_ERROR,
    payload: {error}
})
export const deleteTaskClear = () => ({
    type: constant.DELETE_TASK_CLEAR,
})

export const myProfileBegin = () => ({
    type: constant.MY_PROFILE_START,
})
export const myProfileSuccess = (data) => ({
    type: constant.MY_PROFILE_SUCCESS,
    payload: {data}
})
export const myProfileError = (error) => ({
    type: constant.MY_PROFILE_ERROR,
    payload: {error}
})
export const myProfileClear = () => ({
    type: constant.MY_PROFILE_CLEAR,
})

export const deleteUserBegin = () => ({
    type: constant.DELETE_USER_START,
})
export const deleteUserSuccess = (data) => ({
    type: constant.DELETE_USER_SUCCESS,
    payload: {data}
})
export const deleteUserError = (error) => ({
    type: constant.DELETE_USER_ERROR,
    payload: {error}
})
export const deleteUserClear = () => ({
    type: constant.DELETE_USER_CLEAR,
})