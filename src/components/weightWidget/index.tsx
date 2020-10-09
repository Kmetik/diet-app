import React, { FormEvent, useState } from 'react'
import { Scales } from '../scales'

interface WeightWidgetProps{
    onSave(w:string):void
    defaultWeight: string
}

export const WeightWidget:React.FC<WeightWidgetProps> = ({onSave,defaultWeight})=>{
    const [weight, setWeight] = useState(defaultWeight)
    const handleChange = (e:FormEvent<HTMLInputElement>)=>{
        const target = e.currentTarget
        setWeight(()=>target.value)
    }
    return (
        <div className="col-lg-4 bg-dark text-white card align-items-center">
            <h3 className="p-1">Твой вес сегодня!</h3>
            <div className="row">
            <Scales weight={weight} handleInput={handleChange}/>

            </div>
            <button className="btn btn-outline-light m-2" onClick={()=>onSave(weight)}>Сохранить</button>
        </div>
    )
}