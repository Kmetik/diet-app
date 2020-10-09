import React, { FormEvent } from 'react'
import classnames from 'classnames/bind'

import styles from './scales.module.scss'
import scales from '../regSteps/assets/scales.svg'

interface ScalesProps{
    handleInput(e:FormEvent<HTMLInputElement>):void
    weight: string
}

const cx = classnames.bind(styles)

export const Scales:React.FC<ScalesProps> = ({handleInput,weight})=>{

    const scalesClassNames = cx('row','scales-container','justify-content-center')
    return (
        <div className="col-12">
            <div className={scalesClassNames} >
                <img src={scales} alt="scales" className={styles['scales-range']} style={{transform: `rotate(-${(360/130) * +weight}deg)`}}/>
            </div>
            <div className="row align-items-center justify-content-center">
                <input className={styles['input-control']} type="number" name="weight" onChange={handleInput} defaultValue={weight.toString()}/>        
            </div>
        </div>
    )
}