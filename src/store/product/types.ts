import { IProduct } from "../../utils/interfaces/product.interface"
import { ILoadableState } from "../../utils/interfaces/loadableState"

export const PRODUCT_FETCH = "PRODUCT_FETCH"
export const PRODUCT_FETCH_FAILURE = "PRODUCT_FETCH_FAILURE"
export const PRODUCT_FETCH_ATTEMPT = "PRODUCT_FETCH_ATTEMPT"

export interface ProductState extends ILoadableState{
    product?: IProduct
}

export interface ProductFetchAction {
    type: typeof PRODUCT_FETCH
    product?: IProduct
}

export interface ProductFetchAttemptAction {
    type: typeof PRODUCT_FETCH_ATTEMPT
}

export interface ProductFetchErrorAction {
    type: typeof PRODUCT_FETCH_FAILURE
    err: string
}

export type ProductActionType = ProductFetchAction | ProductFetchErrorAction | ProductFetchAttemptAction