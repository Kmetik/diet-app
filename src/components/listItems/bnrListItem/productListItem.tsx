import React from 'react'
import classNames from 'classnames/bind'

import styles from './bnrItem.module.scss'
import { IConsumption } from '../../../utils/interfaces/consumption.interface'

const cx = classNames.bind(styles)

interface ProductListItemProps{
    item: IConsumption
}

export const ProductListItem:React.FC<ProductListItemProps> = ({item})=>{

    const classes = cx('bnr-item','list-group-item')

    return(
     <li className={classes}>
        <div className="d-flex flex-row justify-content-between">
            <h6>{item.product.name}</h6><p className="text-muted">{item.date}</p>
        </div>
        <div className="row d-flex flex-row justify-content-between no-gutters">
            <div className="col d-flex flex-column">
                <span>Протеин</span>
                <span>{item.product.protein.toFixed(2)}</span>
            </div>
            <div className="col d-flex flex-column">
                <span>Углеводы</span>
                <span>{item.product.carbohydrate.toFixed(2)}</span>
            </div>
            <div className="col d-flex flex-column">
                <span>Жиры</span>
                <span>{item.product.fats.toFixed(2)}</span>
            </div>
            <div className="col d-flex flex-column">
                <span>Калории</span>
                <span>{item.product.energy.toFixed(2)}</span>
            </div>
            <div className="col d-flex flex-column">
                <span>Кол-во</span>
                <span>{item.weight}</span>
            </div>
        </div>
     </li>   
    )
}