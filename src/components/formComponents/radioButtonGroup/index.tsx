import React, { SyntheticEvent, ChangeEvent } from 'react'
import { RadioButtonSelector } from '../radioButtonSelector'

interface RadioButtonGroupProps {
    name: string,
    options: {
        src:string,
        value: string | number,
        alt?: string,
    }[],
    defaultValue?: any
    onSubmit: (e:SyntheticEvent)=> void,
    onValueSet(e:ChangeEvent):void
}


export const RadioButtonGroup:React.FC<RadioButtonGroupProps> = ({name, options, onSubmit,onValueSet,defaultValue})=>{
    
    const selectors = options.map(({src,alt, value},idx)=>
                <RadioButtonSelector
                    checked={defaultValue?.toString() === value.toString()}
                    onValueSet={onValueSet}
                    onSubmit={onSubmit} 
                    name={name} 
                    alt={alt} 
                    src={src} 
                    value={value} 
                    key={idx}/>)
    return (
            <div className="row">
                {selectors}
            </div>
    )
}