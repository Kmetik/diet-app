import { IProduct } from "../../utils/interfaces/product.interface";

export const SEARCH_PRODUCT = "SEARCH_PRODUCT"

export interface SearchBarState {
    categoryID?: number,
    list?: IProduct[]
}

interface SearchProduct {
    type: typeof SEARCH_PRODUCT
    list?: IProduct[]
}

export type SearchActionType = SearchProduct