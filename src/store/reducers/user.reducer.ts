import { IUserReducerState, UserActionTypes, SET_USER_PROFILE, SET_DAILY_LIMIT, UPDATE_JOURNAL } from "../user/types";

const initialState:IUserReducerState = {
    bnr: {
        limits: {
            carbohydrate: 0,
            energy:0,
            fats:0,
            protein: 0
        },
        daily: {
            carbohydrate: 0,
            energy:0,
            fats:0,
            protein: 0
        }
    },
    profile: {
        id: 0,
        name: '',
        weight: 0,
        height: 0,
        birthday: '',
        gender: '',
        activityLevel: 0,
        journal: []
    }
}

export const userReducer = (state=initialState, action:UserActionTypes):IUserReducerState =>{
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.user
            };
        case SET_DAILY_LIMIT:
            return {
                ...state,
                bnr:{
                    ...state.bnr,
                    limits: action.limits
                }
            }
        
        case UPDATE_JOURNAL:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    journal: action.journal
                }
            }
        default:
            return state;
    }
}