import * as constant from '../../constant';

let initialState = {
    createTask : {
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    },
    updateTask : {
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    },
    readTask:{
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    },
    deleteTask:{
        data : [] , 
        error : false , 
        success : false,
        loading : false,
        message : ""
    }
}

export default function task(state  = initialState , action){
    switch(action.type){
        case constant.CREATE_TASK_START : 
        return{
            ...state,
            createTask : {
                data : [] , 
                error : false , 
                success : false,
                loading : true,
                message : ""
            }
        }
        case constant.CREATE_TASK_SUCCESS : 
        return{
            ...state,
            createTask : {
                data : action.payload , 
                error : false , 
                success : true,
                loading : false,
                message : ""
            }
        }
        case constant.CREATE_TASK_ERROR : 
        return{
            ...state,
            createTask : {
                data : [] , 
                error : true , 
                success : false,
                loading : false,
                message : action.payload
            }
        }
        case constant.CREATE_TASK_CLEAR: 
        return{
            ...state,
            createTask : {
                error : false , 
                success : false,
                loading : false,
                message : ""
            }
        }

        

        case constant.READ_TASK_CLEAR : 
        console.log("in clear")
        return{
            ...state,
            readTask : { 
                error : false , 
                success : false,
                loading : false,
                message : ""
            }
        }

        case constant.READ_TASK_START : 
        console.log("in loading")
        return{
            ...state,
            readTask : {
                data : [] , 
                error : false , 
                success : false,
                loading : true,
                message : ""
            }
        }
        case constant.READ_TASK_SUCCESS : 
        console.log("in success")
        return{
            ...state,
            readTask : {
                data : action.payload , 
                error : false , 
                success : true,
                loading : false,
                message : ""
            }
        }
        case constant.READ_TASK_ERROR : 
        return{
            ...state,
            readTask : {
                data : [] , 
                error : true , 
                success : false,
                loading : false,
                message : action.payload
            }
        }

        case constant.UPDATE_TASK_CLEAR : 
        return{
            ...state,
            updateTask : { 
                error : false , 
                success : false,
                loading : false,
                message : ""
            }
        }

        case constant.UPDATE_TASK_START : 
        return{
            ...state,
            updateTask : {
                data : [] , 
                error : false , 
                success : false,
                loading : true,
                message : ""
            }
        }
        case constant.UPDATE_TASK_SUCCESS : 
        return{
            ...state,
            updateTask : {
                data : action.payload , 
                error : false , 
                success : true,
                loading : false,
                message : ""
            }
        }
        case constant.UPDATE_TASK_ERROR : 
        return{
            ...state,
            updateTask : {
                data : [] , 
                error : true , 
                success : false,
                loading : false,
                message : action.payload
            }
        }

        case constant.DELETE_TASK_CLEAR : 
        return{
            ...state,
            deleteTask : { 
                error : false , 
                success : false,
                loading : false,
                message : ""
            }
        }

        case constant.DELETE_TASK_START : 
        return{
            ...state,
            deleteTask : {
                data : [] , 
                error : false , 
                success : false,
                loading : true,
                message : ""
            }
        }
        case constant.DELETE_TASK_SUCCESS : 
        return{
            ...state,
            deleteTask : {
                data : action.payload , 
                error : false , 
                success : true,
                loading : false,
                message : ""
            }
        }
        case constant.DELETE_TASK_ERROR : 
        return{
            ...state,
            deleteTask : {
                data : [] , 
                error : true , 
                success : false,
                loading : false,
                message : action.payload
            }
        }
        default : return state
    }
}