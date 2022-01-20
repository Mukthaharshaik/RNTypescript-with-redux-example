import axios from "axios";
import { Dispatch } from "react"
import { userListPayload } from "../../models/usersModel";
import { combineTypes} from '../../reducers/userActions';


export const getUsersListAction = () => {
    return async(dispatch: Dispatch<combineTypes> )=>{
        dispatch({
            type: "request"
        });
        axios.get("https://www.testjsonapi.com/users").then(response=>{
            let data ={
                usersList: response.data
            }
            dispatch({type:"success", payload:data});
        }).catch(error=>{
            dispatch({type:"failed", error:JSON.stringify(error)});
        })
    }
}