import { FETCH_USERS_ATTEMPT, FETCH_USERS_SUCCESS, UsersActions, UsersState } from "../users/types";


const initialState:UsersState = {
    users: [
    ],
    loading: true,

}

export function usersReducer(state:UsersState=initialState, action: UsersActions ) {
    switch (action.type) {
        case FETCH_USERS_ATTEMPT:
            
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                ...state,
                loading: false,
                users: action.users
            }
        default:
            return state;
    }
}