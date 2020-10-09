import {routerMiddleware, connectRouter} from 'connected-react-router'
import {createStore, combineReducers, applyMiddleware, Action} from 'redux'
import {createBrowserHistory} from 'history'
import thunk, { ThunkAction } from 'redux-thunk'
import { userReducer } from './reducers/user.reducer'
import { categoriesReducer } from './reducers/productCategorie.reducer'
import { searchReducer } from './reducers/search.reducer'
import { productListReducer } from './reducers/productsList.reducer'
import { productReducer } from './reducers/product.reducer'
import { productFilterReducer } from './reducers/productFilter.reducer'
import { diaryReducer } from './reducers/diary.reducer'
import { AppRepository } from '../repository/AppRepository'
import { usersReducer } from './reducers/users.reducer'



export const repo = new AppRepository();



export const history = createBrowserHistory()

const reducers = combineReducers({
    router: connectRouter(history),
    user: userReducer,
    login: usersReducer,
    productCategory: categoriesReducer,
    search: searchReducer,
    productsList: productListReducer,
    product: productReducer,
    searchProduct: productFilterReducer,
    diary: diaryReducer
})

export const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(history)))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>

export type RootState = ReturnType<typeof reducers>