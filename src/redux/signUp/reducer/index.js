import * as constant from '../../constant';

let initialState = {
    signUp : {
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    }
}
export default function signUpReducer(state = initialState , action){
    switch(action.type){
        case constant.SIGNUP_START:
            return{
                ...state,
                signUp:{
                    data : [],
                    error:false,
                    loading:true,
                    success : false,
                    message : ""
                }
            }
            case constant.SIGNUP_SUCCESS :
            return{
                ...state,
                signUp : {
                    data : action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
            case constant.SIGNUP_ERROR :
            return{
                ...state,
                signUp :{
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
            case constant.SIGNUP_CLEAR:
            return{
                ...state,
                signUp :{
                    error: false,
                    success: false,
                    loading: false,
                }
            }
            default : return state
    }
}