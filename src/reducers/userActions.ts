import {userListPayload} from '../models/usersModel'

type request ={
    type: "request",
}

type success = {
    type:"success",
    payload: userListPayload
}
type failed ={
    type:"failed",
    error: string
}

export type combineTypes = request | success | failed;