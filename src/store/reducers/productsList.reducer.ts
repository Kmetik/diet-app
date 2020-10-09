import { ProductsState, ProductsActions, PRODUCTS_FETCH_ATTEMPT, PRODUCTS_FETCH_FAILURE, PRODUCTS_FETCH_SUCCESS} from "../productsList/types";

const initialState:ProductsState = {
    loading: true,
    error: false,
    products: [],
    nextPage: true
}

export const productListReducer = (state = initialState, action:ProductsActions):ProductsState =>{

    switch (action.type) {
        case PRODUCTS_FETCH_ATTEMPT: {
            return {
                ...state,
                products: [],
                loading: true,
                error: false,
                nextPage: true
            }
        }
        case PRODUCTS_FETCH_SUCCESS:{
            return {
                ...state,
                loading: false,
                products: action.list,
                nextPage: action.nextPage
            }
        }
        case PRODUCTS_FETCH_FAILURE:{
            return {
                ...state,
                error: action.error,
                loading: false
            }
        }
        default:
            return state;
    }
}