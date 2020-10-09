import { AppThunk } from "..";
import { QuerySearchParams, FILTER_PARAMS_FETCH_SUCCESS, FILTER_PARAMS_FETCH_FAILURE } from "./types";
import axios from 'axios'


function setSearchParams(params:QuerySearchParams){
    return {
        type: FILTER_PARAMS_FETCH_SUCCESS,
        params: params
    }
}

function fetchQueryParamsError(error:string){
    return {
        type: FILTER_PARAMS_FETCH_FAILURE,
        error: error
    }
}

export function getFilterParams():AppThunk{
    return async dispatch=>{
        try {
            const res = await  axios.get('dataGarbage/categories.json')
            const list = await res.data
            dispatch(setSearchParams({categories: list}))
        } catch (error) {
            dispatch(fetchQueryParamsError(error))
        }
    }
}