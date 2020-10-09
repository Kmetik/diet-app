import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IProduct } from '../../../utils/interfaces/product.interface'

interface SearchListItemProps extends IProduct{
    
}

export const SearchListItem:React.FC<SearchListItemProps> = ({name,id,protein})=>{
    const location = useLocation()
    return (
        <Link to={{
            pathname: `product/${id}`,
            state: {
                background: location
            }
        }} className="list-group-item"><span>{name}</span></Link>
    )
}