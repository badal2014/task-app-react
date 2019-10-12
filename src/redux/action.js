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