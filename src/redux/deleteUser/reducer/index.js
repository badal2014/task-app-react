import * as constant from '../../constant';


let initialState = {
    deleteUser : {
        data : [],
        error : false,
        success : false,
        loading : false,
        message : ""
    }
}

export default function deleteUser(state = initialState  ,action){
    switch(action.type){
        case constant.DELETE_USER_CLEAR :
        console.log("in deleter clear")

        return{
            ...state,
            deleteUser : {
                loading : false,
                success : false,
                error : false,
                message : ""
            }
        }
        case constant.DELETE_USER_START :
        return{
            ...state,
            deleteUser : {
                data : [],
                loading : true,
                success : false,
                error : false,
                message : ""
            }
        }
        case constant.DELETE_USER_SUCCESS :
        console.log("in success deleete" , action.payload)
        return{
            ...state,
            deleteUser : {
                data : action.payload,
                loading : false,
                success : true,
                error : false,
                message : ""
            }
        }
        case constant.DELETE_USER_ERROR :
        return{
            ...state,
            deleteUser : {
                data : [],
                loading : false,
                success : false,
                error : true,
                message : action.payload
            }
        }
        default : return state
    }
}