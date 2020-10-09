import React, { useEffect } from 'react'
import { CategoryListItem } from '../../listItems/categoryListItem'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { fetchCategoryList } from '../../../store/productCategories/action'



export const CategoryList:React.FC = ()=>{
    const {loading,items} = useSelector(({productCategory}:RootState)=>productCategory)
    const dispatch = useDispatch()
    useEffect(()=>{
        const loadCategories = ()=>{
            dispatch(fetchCategoryList())
        }
        if(!items && loading) loadCategories()
    },[dispatch,items,loading])
    return (
        <div className="row justify-content-around">
                {loading && <h4>Loading...</h4>}
                {items && items.map(item=><CategoryListItem key={item.id} {...item}/>)}
        </div>
    )
}