import React from 'react';
import classNames from 'classnames/bind'
import styles from './regSteps.module.scss'
import { RegStepProps } from '../hoc/regStepsHoc';

const cx = classNames.bind(styles)

export const NameStep:React.FC<RegStepProps> = ({formik})=>{
    const inputClassNames = cx({
        'reg-step':true,
        error: formik.errors.name
    })
    return (
        <div className="col-12 bg-primary ">
            <div className="row min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-4 col-md-10">
                    <h1 className={styles['reg-step']}>Твое имя</h1>

                </div>
                <div className="col-lg-4 col-md-10 ml-lg-4">
                    <input type="text" className={inputClassNames} name="name" defaultValue={formik.values.name} onInput={formik.handleChange}/>
                </div>
                <div className="col-lg-4 col-md-10 mt-2 ml-4">
                    {formik.errors.name && <span className="text-warning"><strong>Русские и латинские буквы, без цифр и знаков</strong></span>}
                </div>
            </div>
        </div>
    )
}