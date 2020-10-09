import { IUser } from "../../utils/interfaces/user.interface"
import { IBNR } from "../../utils/interfaces/bnr.interface"
import { IWeightJournal } from "../../utils/interfaces/weightJournal.interface"

export interface IUserReducerState {
    profile: IUser,
    bnr: {
        daily: IBNR,
        limits: IBNR
    }
}


export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const DELETE_PRODUCT = 'DELETE_CONSUMPTION'
export const COUNT_STATS = 'COUNT_STATS'
export const SET_DAILY_LIMIT = 'SET_DAILY_LIMIT' 

export const UPDATE_JOURNAL = 'UPDATE_JOURNAL'





interface SetUserDataAction {
    type: typeof SET_USER_PROFILE,
    user: IUser
}

interface SetUserDailyLimits {
    type: typeof SET_DAILY_LIMIT,
    limits:IBNR
}

interface UpdateWeightJournal {
    type: typeof UPDATE_JOURNAL,
    journal: IWeightJournal[]
}

export type UserActionTypes = SetUserDataAction | SetUserDailyLimits | UpdateWeightJournal