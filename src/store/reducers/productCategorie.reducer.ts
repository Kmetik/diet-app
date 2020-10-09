import { ICategoriesState, CategoryActionType, FETCH_CATEGORY_LIST_SUCCESS, FETCH_CATEGORY_FAILURE } from "../productCategories/types";

export const initialState:ICategoriesState = {
    loading: true,
    error: false
}

export const categoriesReducer = (state = initialState, action:CategoryActionType)=>{
    switch (action.type) {
        case (FETCH_CATEGORY_LIST_SUCCESS):{
            return {
                ...state,
                items: action.list,
                loading: false,
                error: false
            }
        }
        case (FETCH_CATEGORY_FAILURE):{
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}