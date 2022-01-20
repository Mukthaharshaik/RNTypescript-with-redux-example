import { userListPayload, userListModel } from "../models/usersModel";


const initialState = {
    error: "",
    loading: false,
    data:{
        usersList:{
            id: "",
            name: "",
            job_title: "",
            created_at: "",
            updated_at: ""
        }
    }
};

type actionProps1={
    type: string,
    payload?: userListPayload,
    error?:string
}
type actionProps2={
    type: string,
    payload: userListPayload,
    error:string
}
type combineProps = actionProps1 | actionProps2

const userReducer = (state : userListModel = initialState, action: combineProps) => {
    switch(action.type){
       case "request": 
            return {
                error: null,
                loading: true,
                data: {...state.data}
            } 
        case "success":
            return {
                error: null,
                loading: false,
                data: { ...state.data, data: action.payload}
            }
        case "failed":
            return {
                error: action.error,
                loading: false,
                data: {...state.data}
            }
        default:
            return {
                error: null,
                loading: false,
                data: state
            }
    }
}

export default userReducer;