import React from 'react'
import { ProductListItem } from '../../listItems/bnrListItem'
import { IConsumption } from '../../../utils/interfaces/consumption.interface'

import './dayBNRList.scss'

interface BNRListProps {
    products: IConsumption[]
}

export const DayBNRList:React.FC<BNRListProps> = ({products})=>{
    
    function buildItemView(item:IConsumption):IConsumption {
        const r = +item.weight/100
        const d = new Date(item.date)
        const time = [d.getHours().toString().padStart(2,'0'),d.getMinutes().toString().padStart(2,'0')].join(':')
        
        return {
            ...item,
            date: time,
            product: {
                ...item.product,
                carbohydrate: r * item.product.carbohydrate,
                energy: r * item.product.energy,
                fats: r * item.product.fats,
                protein: r* item.product.protein

            }
        }
    }
    const list = products.map((item,idx)=><ProductListItem 
                item={buildItemView(item)}
                key={`p${idx}-${item.product.id}`}/>
    )
    return(
        <ul className="day-bnr-list list-group mt-2">
            {list}
        </ul>

    )
}