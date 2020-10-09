import { SET_USER_PROFILE, UserActionTypes, SET_DAILY_LIMIT, UPDATE_JOURNAL } from "./types"
import { IUser } from "../../utils/interfaces/user.interface"
import { AppThunk, repo } from ".."
import { push} from "connected-react-router"
import { IBNR } from "../../utils/interfaces/bnr.interface"
import { countUserLimits } from "../../utils/statsCounter"
import { UserSchema } from "../../utils/schema/user.schema"
import { AppRepository } from "../../repository/AppRepository"
import { IWeightJournal } from "../../utils/interfaces/weightJournal.interface"

export function setUserData (user:IUser):UserActionTypes {
    return {
        type: SET_USER_PROFILE,
        user: user
    }
}



export function setLimits(limits: IBNR):UserActionTypes {
    return {
        type: SET_DAILY_LIMIT,
        limits
    }
} 


export function setJournal(journal:IWeightJournal[]) {
    return {
        type: UPDATE_JOURNAL,
        journal
    }
} 

export function countLimits():AppThunk {
    return (dispatch,getState) =>{
        const user = getState().user.profile
        const bnr = countUserLimits(user)
        
        dispatch(setLimits(bnr))
    }
}

export function formSubmit(userData: UserSchema, id?:number):AppThunk {
    return async (dispatch)=> {
        const user = await repo.createUser({
            ...userData
        },id) 
        
        dispatch(setUserData(user));
        dispatch(push('/'))
    }
}



export function setCurrentUser(user: IUser):AppThunk {
    return async dispatch=> {
        AppRepository.setCurrentUser(user)
        dispatch(setUserData(user))
        await repo.getConsumption()
        dispatch(push('/'))

    }
}

export function updateWeightJournal(weight:string,date = new Date()):AppThunk {
    return async dispatch=> {
        const journal = await repo.addToJournal({
            value: weight,
            date: date.toISOString()
        })

        dispatch(setJournal(journal))
    }
}



