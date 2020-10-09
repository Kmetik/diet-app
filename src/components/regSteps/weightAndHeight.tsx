import React from 'react'
import styles from './regSteps.module.scss'
import { RegStepProps } from '../hoc/regStepsHoc'
import { Scales } from '../scales'


export const WeightAndHeight:React.FC<RegStepProps> = ({formik:{values,handleChange}})=>{
    
    const value =values.weight?values.weight:0
    return (
        <div className="col-12 bg-warning">
            <div className="row min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <h3 className={styles['reg-step']}>Твой вес:</h3>
                    </div>
                    <Scales handleInput={handleChange} weight={value.toString()}/>

                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <h3 className={styles['reg-step']}>
                            и рост:
                        </h3>
                            <input type="number" name="height" onInput={handleChange} defaultValue={values.height}/>
                    </div>
                </div>
            </div>
        </div>
    )
}