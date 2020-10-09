import React from 'react'
import { IProductCategory } from '../../../utils/interfaces/productCategory.interface'
import { Link } from 'react-router-dom'


export const CategoryListItem:React.FC<IProductCategory> = ({id,name,logo})=>{


    return(
        <Link className="col-3 p-1 d-flex align-items-center btn btn-outline-light text-dark rounded-0" to={`products?category=${id}`}>
            <div className="row align-items-center">
                <div className="col-3">
                    <img src={logo} alt={name} className="img-fluid rounded"/>
                </div>
                <span>{name}</span>
            </div>
        </Link>
    )
}