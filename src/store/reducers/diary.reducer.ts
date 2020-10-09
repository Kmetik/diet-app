import { ADD_CONSUMPTION, DiaryActions, DiaryState, FETCH_CONSUMPTION_BY_DATE, SET_CONSUMPTION } from "../diary/types";


const initialState:DiaryState = {
    consumption: [],
    stats: {
        carbohydrate: 0,
        energy: 0,
        fats: 0,
        protein: 0
    }
}

export function diaryReducer(state:DiaryState=initialState, action:DiaryActions){
    switch (action.type) {
        case FETCH_CONSUMPTION_BY_DATE:
            return state;
        case SET_CONSUMPTION:
            return {
                ...state,
                consumption: action.list,
                stats: action.stats
            }
        case ADD_CONSUMPTION:
            return {
                ...state,
                consumption: [
                    ...state.consumption,
                    action.item
                ]
            }
        default:
            return state;
    }
}