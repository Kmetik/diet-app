import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ProductsListItem } from '../../listItems/productListItem'
import { RootState } from '../../../store'

import './productsList.scss'
import { getProductsList, productsListFetchAttempt } from '../../../store/productsList/action'
import { useLocation } from 'react-router'
import { NewListPagination } from '../../listPagination/newPagination'


interface ProductsListProps {
    query: URLSearchParams
}


export const ProductList:React.FC<ProductsListProps> = ({query})=>{
    const {loading,products,nextPage} = useSelector((state:RootState)=>state.productsList)
    const location = useLocation()
    const dispatch = useDispatch()
    const list = products.map((item,idx)=><ProductsListItem item={{...item}} key={idx}/>)
    
    useEffect(()=>{
        dispatch(getProductsList(location.search))

        const loadProducts = ()=>{
            dispatch(productsListFetchAttempt())
        }
        loadProducts() 
        return ()=>  loadProducts()
    },[dispatch,location.search])
    return (
        <div className="col-12">
        <table className="table table-hover header-fixed ml-1">
            <thead>
                <tr> 
                    <th>Продукт</th>
                    <th>Белок</th>
                    <th>Углеводы</th>
                    <th>Жиры</th>
                    <th>Энергия</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
                {list}
                
            </tbody>
        </table>
        {loading && <h4>Loading...</h4>}

        {/* тут была пагинация, но ушла из соображений производительности бд */}
        {!loading && <NewListPagination next={nextPage}/>}

        </div>
    )
}