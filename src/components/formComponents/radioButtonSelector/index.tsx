import React, { SyntheticEvent, ChangeEvent } from 'react'
import classNames from 'classnames/bind'

import styles from './radioButton.module.scss'

export interface RadioButtonSelectorProps {
    src:string,
    value: string | number,
    alt?: string,
    name: string,
    onSubmit:(e:SyntheticEvent)=>void,
    onValueSet(e:ChangeEvent):void,
    checked:boolean
}

const cx = classNames.bind(styles)

export const RadioButtonSelector:React.FC<RadioButtonSelectorProps> = ({src, value, alt, name, onSubmit, onValueSet,checked})=>{
    const imgClasses = cx('img-fluid','inverted')
    return (
        <div className="col-lg-2 col-md-3 col-xs-6">
            <label className="d-flex flex-column">    
                <input type="radio" name={name} value={value} className={styles.selector} onKeyPress={onSubmit} onChange={onValueSet} defaultChecked={checked}/>
                <img src={src} alt={alt} className={imgClasses}/>
                <span>{alt}</span>
            </label>
        </div>
    )
}