import { IProduct } from "../../utils/interfaces/product.interface"
import { ILoadableState } from "../../utils/interfaces/loadableState"

export const PRODUCTS_FETCH_ATTEMPT = 'PRODUCTS_FETCH_ATTEMPT'

export const PRODUCTS_FETCH_FAILURE = 'PRODUCTS_FETCH_FAILURE'
export const PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS"

export interface ProductsState extends ILoadableState {
    products: IProduct[],
    nextPage: boolean
}

interface SetProductsList {
    type: typeof PRODUCTS_FETCH_SUCCESS
    list: IProduct[]
    nextPage: boolean
}

interface GetProductsListAttempt {
    type: typeof PRODUCTS_FETCH_ATTEMPT
}

interface GetProductsListFailure {
    type: typeof PRODUCTS_FETCH_FAILURE,
    error: string
}


export type ProductsActions = SetProductsList | GetProductsListFailure | GetProductsListAttempt 
