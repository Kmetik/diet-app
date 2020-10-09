import { goBack } from "connected-react-router";
import { AppThunk, repo } from "..";
import { IBNR } from "../../utils/interfaces/bnr.interface";
import { IConsumption } from "../../utils/interfaces/consumption.interface";
import { IProduct } from "../../utils/interfaces/product.interface";
import { countConsumptionStats } from "../../utils/statsCounter";
import { ADD_CONSUMPTION, DiaryActions, SET_CONSUMPTION, UPDATE_DAILY_LIMIT } from "./types";

function setDateData(consumption: IConsumption[], stats: IBNR):DiaryActions {
    return {
        type: SET_CONSUMPTION,
        list: consumption,
        stats: stats   
    }
}


export function updateDailyLimits(limits: IBNR):DiaryActions {
    return {
        type: UPDATE_DAILY_LIMIT,
        limits
    }
}

export function getConsumption(date:Date = new Date()):AppThunk {
    return async dispatch => {
        try {
            const consumption = await repo.getConsumption(date)
            const stats = countConsumptionStats(consumption)
            dispatch(setDateData(consumption, stats))
        } catch (error) {
            
        }
    }
}

export function addConsumption(product: IProduct, weight: number):DiaryActions {
    return {
        type: ADD_CONSUMPTION,
        item: {
            product: product,
            weight: weight.toString(),
            date: Date()
        }
    }
}

export function callConsumptionAddEvent(product: IProduct, weight: number):AppThunk {
    return async (dispatch)=>{
        await repo.addConsumption({
            product,weight:weight.toString(),
            date: new Date().toISOString()
        })
        dispatch(addConsumption(product,weight))
        const consumption = await repo.getConsumption();
        const limits = countConsumptionStats(consumption)
        dispatch(updateDailyLimits(limits))

        dispatch(goBack())

    }
}