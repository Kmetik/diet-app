import { FETCH_CATEGORY_LIST_SUCCESS, FETCH_CATEGORY_FAILURE } from "./types";
import { IProductCategory } from "../../utils/interfaces/productCategory.interface";
import { AppThunk } from "..";
import axios from 'axios'

function setCategoryList(list:IProductCategory[]){
    return {
        type: FETCH_CATEGORY_LIST_SUCCESS,
        list: list
    }
}

function fetchCategoryFailure(error:string){
    return {
        type: FETCH_CATEGORY_FAILURE,
        error: error
    }
}

export function fetchCategoryList ():AppThunk {
    return async dispatch=>{
        try {
            const res = await  axios.get('dataGarbage/categories.json')
            const list = await res.data
            dispatch(setCategoryList(list))
        } catch (error) {
            dispatch(fetchCategoryFailure(error))
        }
    }
}