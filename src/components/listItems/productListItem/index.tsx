import React from 'react'
import { IProduct } from '../../../utils/interfaces/product.interface'
import { Link, useLocation } from 'react-router-dom'

interface ProductListItemProps {
    item: IProduct
}

export const ProductsListItem:React.FC<ProductListItemProps> = ({item})=>{
    const location = useLocation()
    return (
        <tr>
            <th>{item.name}</th>
            <td>{item.protein}</td>
            <td>{item.carbohydrate}</td>
            <td>{item.fats}</td>
            <td>{item.energy}</td>
            <td>
                <Link to={{
                    pathname: `./product/${item.id}`,
                    state: {
                        background: location
                    }
                }} className="btn btn-light">
                    +
                </Link></td>
        </tr>
    )
}