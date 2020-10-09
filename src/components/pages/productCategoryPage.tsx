import React from 'react'
import { CategoryList } from '../lists/categoryList'
import { SearchBar } from '../searchBar'


export const ProductCategoryPage:React.FC = ()=>{
    
    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-10 card">
                    <SearchBar />
                    <CategoryList />
                </div>
            </div>
        </div>
    )
}