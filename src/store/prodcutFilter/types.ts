import { IProductCategory } from "../../utils/interfaces/productCategory.interface";
import { ILoadableState } from "../../utils/interfaces/loadableState";

export const FILTER_PARAMS_FETCH_ATTEMPT = "FILTER_PARAMS_FETCH_ATTEMPT"
export const FILTER_PARAMS_FETCH_SUCCESS = "FILTER_PARAMS_FETCH_SUCCES"
export const FILTER_PARAMS_FETCH_FAILURE = "FILTER_PARAMS_FETCH_FAILURE"


interface FilterParamsFetchAction {
    type: typeof FILTER_PARAMS_FETCH_ATTEMPT
}

interface FilterParamsFetchSuccesAction {
    type: typeof FILTER_PARAMS_FETCH_SUCCESS
    params: QuerySearchParams
}


interface FilterParamsFetchFailureAction {
    type: typeof FILTER_PARAMS_FETCH_FAILURE
    error: string
}

export interface QuerySearchParams {
    categories:IProductCategory[]
}

export interface ProductFilterState extends ILoadableState {
    params: QuerySearchParams
}



export type ProductFilterAction = FilterParamsFetchAction | FilterParamsFetchFailureAction | FilterParamsFetchSuccesAction