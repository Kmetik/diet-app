import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { getFilterParams } from '../../../store/prodcutFilter/action'
import { fetchCategoryList } from '../../../store/productCategories/action'
import { CategorySelect } from '../../formComponents/categorySelect'
import { useFormikContext } from 'formik'
import { ISortParams } from '../../productFilter/productFilter'
import { ExtraSortParams } from '../../formComponents/extraSortParams'
import { SearchBar } from '../../searchBar'

export const ProductFilterForm:React.FC = ()=>{
    const {submitForm,handleReset} = useFormikContext<ISortParams>()
    const {params} = useSelector((state:RootState)=>state.searchProduct)
    const dispatch = useDispatch()

    useEffect(()=>{
        function getFilterData(){
            if(!params || params.categories.length ===0)dispatch(getFilterParams())
            dispatch(fetchCategoryList())
        }
        getFilterData()
    },[dispatch,params])

    
    return (
        
            <div className="row d-flex flex-column">
                <CategorySelect options={params.categories}/>
                <ExtraSortParams />
                <div className="col-lg-12">
                    <div className="row justify-content-between align-content-center bg-white shadow-sm rounded">
                        <SearchBar />
                        <div className="col-auto d-flex align-items-center">
                            <div className="btn-group">
                                <button className="btn btn-primary mr-1" onClick={submitForm}>Показать</button>
                                <button className="btn btn-warning text-white" type="reset" onClick={handleReset}>Сбросить</button>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )


}