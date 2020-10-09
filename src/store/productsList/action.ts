import { AppThunk, repo } from "..";
import { PRODUCTS_FETCH_FAILURE, PRODUCTS_FETCH_ATTEMPT, PRODUCTS_FETCH_SUCCESS} from "./types";
import { IProduct } from "../../utils/interfaces/product.interface";


export function productsListFetchAttempt(){
    return{
        type: PRODUCTS_FETCH_ATTEMPT
    }
}

function setProductsList(products:IProduct[],nextPage:boolean) {
    return {
        type: PRODUCTS_FETCH_SUCCESS,
        list: products,
        nextPage
    }
}

function productsListFetchFailure(error:string){
    return {
        type: PRODUCTS_FETCH_FAILURE,
        error: error
    }
}


export function getProductsList(query: string):AppThunk{
    return async dispatch=>{
        try {
            dispatch(productsListFetchAttempt())
            const list = await repo.getProducts(query)
            const next = list.length === 20? true:false 

            dispatch(setProductsList(list,next))
        } catch (error) {
            dispatch(productsListFetchFailure(error))
        }
    }
}

export function getProductsListPage(query?:string):AppThunk{
    return async dispatch=>{
        try {
            console.log('hello')
            dispatch(productsListFetchAttempt())
            const list = await repo.getProducts(query)
            const next = list.length === 20? true:false 
            dispatch(setProductsList(list,next))
        } catch (error) {
            dispatch(productsListFetchFailure(error))
        }
    }
}