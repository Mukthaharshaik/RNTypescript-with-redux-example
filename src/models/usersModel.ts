export type userListModel={
    error: string,
    loading: boolean,
    data:{
        usersList:usersList
    }
}

export type usersList={
    id: string,
    name: string,
    job_title: string,
    created_at: string,
    updated_at: string
}

export type userListPayload = {
    usersList:usersList
}