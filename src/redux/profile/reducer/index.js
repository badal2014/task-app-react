import * as constant from '../../constant';

let initialState = {
    myProfile: {
        data: [],
        error: false,
        success: false,
        loading: false,
        message: ""
    }
}

export default function myProfile(state = initialState, action) {
    switch (action.type) {
        case constant.MY_PROFILE_START:
            return {
                ...state,
                myProfile: {
                    data: [],
                    error: false,
                    success: false,
                    loading: true,
                    message: ""
                }
            }
        case constant.MY_PROFILE_SUCCESS:
            return {
                ...state,
                myProfile: {
                    data: action.payload,
                    error: false,
                    success: true,
                    loading: false,
                    message: ""
                }
            }
        case constant.MY_PROFILE_ERROR:
            return {
                ...state,
                myProfile: {
                    data: [],
                    error: true,
                    success: false,
                    loading: false,
                    message: action.payload
                }
            }
            case constant.MY_PROFILE_CLEAR : 
        return{
            ...state,
            myProfile : { 
                error : false , 
                success : false,
                loading : false,
                message : ""
            }
        }
            default : return state
    }
}