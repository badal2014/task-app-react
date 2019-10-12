import * as constant from '../../constant';

let initialState = {
    login : {
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    }
}
export default function dataReducer(state = initialState , action){
    switch(action.type){
        case constant.LOGIN_START:
            return{
                ...state,
                login:{
                    data : [],
                    error:false,
                    loading:true,
                    success : false,
                    message : ""
                }
            }
            case constant.LOGIN_SUCCESS :
            console.log("action.payload.login" ,action.payload)
            return{
                ...state,
                login : {
                    data : action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
            case constant.LOGIN_ERROR :
            return{
                ...state,
                login :{
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
            default : return state
    }
}