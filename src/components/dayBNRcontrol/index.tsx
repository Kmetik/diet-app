import React from 'react'
import { DayBNRList } from '../lists/dayBNRList'
import { Link } from 'react-router-dom'
import { IConsumption } from '../../utils/interfaces/consumption.interface'



interface DayBNRControlProps{
    products: IConsumption[]
}

export const DayBNRControl:React.FC<DayBNRControlProps> = ({products})=>{

    return (
        <div className="col-lg-4 card">
            {products && <DayBNRList products ={products}/>}
            <Link className="btn btn-primary mt-auto mb-1" to="/products">Добавить</Link>
        </div>
    )
}