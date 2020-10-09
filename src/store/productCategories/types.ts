import { IProductCategory } from "../../utils/interfaces/productCategory.interface";
import { ILoadableState } from "../../utils/interfaces/loadableState";

export interface ICategoriesState extends ILoadableState  {
    items?: IProductCategory[]
}

export const FETCH_CATEGORY_LIST_SUCCESS = 'FETCH_CATEGORY_LIST_SUCCESS'
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE'

interface FetchCategoryList {
    type: typeof FETCH_CATEGORY_LIST_SUCCESS
    list: IProductCategory[]
}

interface FetchCategoryError {
    type: typeof FETCH_CATEGORY_FAILURE
    error: string
}

export type CategoryActionType = FetchCategoryList | FetchCategoryError