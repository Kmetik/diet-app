import { ProductFilterState, ProductFilterAction, FILTER_PARAMS_FETCH_ATTEMPT, FILTER_PARAMS_FETCH_SUCCESS } from "../prodcutFilter/types"

const initialState: ProductFilterState = {
    loading: false,
    error: false,
    params: {
        categories:[]
    }
}

export const productFilterReducer = (state:ProductFilterState=initialState,action:ProductFilterAction)=>{
        switch (action.type) {
            case FILTER_PARAMS_FETCH_ATTEMPT:{
                return {
                    ...state,
                    loading: true,
                    error: false
                }
            }
            case FILTER_PARAMS_FETCH_SUCCESS:{
                return {
                    loading: false,
                    error: false,
                    params: action.params
                }
            }
        
            default:
                return state
        }
}