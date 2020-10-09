import { IUser } from "../../utils/interfaces/user.interface"


export const FETCH_USERS_ATTEMPT = "FETCH_USERS_ATTEMPT"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS" 

export interface UsersState {
    users: IUser[]
    loading: boolean
}

interface FetchUsersAttempt {
    type: typeof FETCH_USERS_ATTEMPT
}

interface FetchUsersSuccess {
    type: typeof FETCH_USERS_SUCCESS
    users: IUser[]
}

export type UsersActions = FetchUsersAttempt | FetchUsersSuccess