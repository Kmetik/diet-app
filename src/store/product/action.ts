import axios from 'axios'
import { PRODUCT_FETCH, ProductFetchAction, PRODUCT_FETCH_FAILURE, ProductFetchErrorAction, PRODUCT_FETCH_ATTEMPT, ProductFetchAttemptAction } from "./types";
import { IProduct } from "../../utils/interfaces/product.interface";
import { AppThunk } from "..";

export function setProduct(product?:IProduct):ProductFetchAction{
    return {
        type: PRODUCT_FETCH,
        product: product
    }
}

export function productFetch():ProductFetchAttemptAction{
    return {
        type: PRODUCT_FETCH_ATTEMPT
    }
}

export function fetchProductFailure(err:string):ProductFetchErrorAction{

    return {
        type: PRODUCT_FETCH_FAILURE,
        err: err
    }
}

export function getProduct(id:number):AppThunk{
    return async dispatch=>{
        try {
            dispatch(productFetch())
            const res = await axios.get('/dataGarbage/productdb.json')
            const data = await res.data
            const product = data.filter((item:IProduct)=> item.id === id )
            dispatch(setProduct(product[0]))
        } catch (error) {
            dispatch(fetchProductFailure(error))
        }
    }
}