import { AppThunk, repo } from "..";
import { IUser } from "../../utils/interfaces/user.interface";
import { FETCH_USERS_ATTEMPT, FETCH_USERS_SUCCESS } from "./types";

export function fetchUsersSuccess (users:IUser[]){
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}

export function fetchUserAttempt() {
    return {
        type: FETCH_USERS_ATTEMPT
    }
}


export function getUsers():AppThunk {
    return async dispatch=>{
        dispatch(fetchUserAttempt())
        try {
            const users = await repo.getAllUsers() as IUser[]
            dispatch(fetchUsersSuccess(users))
        } catch (error) {
            
        }
    }
}