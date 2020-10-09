import { ProductActionType, ProductState, PRODUCT_FETCH, PRODUCT_FETCH_FAILURE, PRODUCT_FETCH_ATTEMPT } from "../product/types"

const initialState:ProductState = {
    loading: true,
    error: false
}

export const productReducer = (state:ProductState = initialState, action:ProductActionType)=>{
    switch (action.type){
        case (PRODUCT_FETCH):{
            return {
                loading:false,
                error: false,
                product: action.product
            }
        }
        case (PRODUCT_FETCH_ATTEMPT):{
            return{
                loading: true,
                error: false,
                product: null
            }
        }
        case (PRODUCT_FETCH_FAILURE):{
            return{
                loading: false,
                error: action.err
            }
        }
        default:
            return state;
    }
}