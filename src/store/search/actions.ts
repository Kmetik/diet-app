import { AppThunk, repo } from "..";
import { SEARCH_PRODUCT } from "./types";
import { IProduct } from "../../utils/interfaces/product.interface";

function setSearchList(list: IProduct[]) {
    return {
        type: SEARCH_PRODUCT,
        list: list
    }
}

export function searchByQuery(query:string):AppThunk{
    return async dispatch=>{
        const list = await repo.findProduct(query) 
        dispatch(setSearchList(list))
    }
}