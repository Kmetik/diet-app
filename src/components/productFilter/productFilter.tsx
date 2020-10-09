import React from 'react'
import {useDispatch} from 'react-redux'
import { Formik } from 'formik'
import { ProductFilterForm } from '../forms/productFilterForm'
import { push } from 'connected-react-router'
import { useSearchParams } from '../hooks/useSearchParams'

export interface ISortParams {
    page?: number
    category?: Array<number>
    protein?: number | Array<number>
    carbohydrate?: number | Array<number>
    fats?: number | Array<number>
}

export const ProductFilter:React.FC= ()=>{
    const {params,buildString} = useSearchParams()
    const dispatch = useDispatch()
    
    function buildSearchQuery(values:ISortParams){
        delete values.page
        dispatch(push(buildString(values)))
    }
    return (
        <Formik
            initialValues={params}
            onSubmit={buildSearchQuery}
            onReset={()=>{
                dispatch(push('/products'))
            }}
        >
            <ProductFilterForm />  
        </Formik>
    )
}