import { SearchActionType, SEARCH_PRODUCT,SearchBarState } from "../search/types";

const initialState:SearchBarState ={
    categoryID: undefined,
    list: undefined
}

export const searchReducer = (state = initialState, action:SearchActionType)=>{
    switch (action.type) {
        case SEARCH_PRODUCT:{
            return {
                ...state,
                list: action.list
            }
        }
        default:
            return state;
    }
}