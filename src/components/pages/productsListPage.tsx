import React from 'react'
import { ProductList } from '../lists/productList'
import { ProductFilter } from '../productFilter/productFilter'
import useQuery from '../hooks/useQuery'
import { NavBar } from '../navbar'

export const ProductsListPage:React.FC = ()=>{
    const query = useQuery()
    return (
        <div className="container-fluid">
            <NavBar/>

            <div className="row justify-content-center mt-2">
            <div className="col-lg-10">
                
                <div className="jumbotron-fluid">
                    <ProductFilter/>
                </div>
            </div>
            <div className="col-lg-10 col-md-12 card">
                
                <div className="row">
                    <ProductList query={query}/>
                </div>
            </div>
        </div>
        </div>
    )
}