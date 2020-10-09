import { IBNR } from "../../utils/interfaces/bnr.interface";
import { IConsumption } from "../../utils/interfaces/consumption.interface";

export interface DiaryState {
    consumption: IConsumption[]
    stats: IBNR
}

export const FETCH_CONSUMPTION_BY_DATE = 'FETCH_CONSUMPTION_BY_DATE'
export const SET_CONSUMPTION = 'SET_CONSUMPTION'
export const ADD_CONSUMPTION = 'ADD_CONSUMPTION'

export const UPDATE_DAILY_LIMIT = 'UPDATE_DAILY_LIMIT'
interface UpdateDailyLimits {
    type: typeof UPDATE_DAILY_LIMIT,
    limits: IBNR
}

interface FetchConsumptionByDate {
    type: typeof FETCH_CONSUMPTION_BY_DATE
    date: Date
}

interface SetConsumption {
    type: typeof SET_CONSUMPTION
    list: IConsumption[]
    stats: IBNR
}

interface AddUserConsumption {
    type: typeof ADD_CONSUMPTION,
    item: IConsumption
}

export type DiaryActions = FetchConsumptionByDate | SetConsumption | AddUserConsumption |UpdateDailyLimits