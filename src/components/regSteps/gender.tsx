import React from 'react'

import male from './assets/male.png'
import female from './assets/female.png'
import transformer from './assets/transformer.png'
import styles from './regSteps.module.scss'

import { RadioButtonGroup } from '../formComponents/radioButtonGroup'
import { RegStepProps } from '../hoc/regStepsHoc'

import './regSteps.scss'
import { Gender } from '../../utils/enums/gender.enum'


export const GenderStep:React.FC<RegStepProps> = ({formik})=>{
    return (
        <div className="col-12 bg-info text-white">
            <div className="row min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="col-6">
                    <h1 className={styles['reg-step']}>Твой пол:</h1>
                </div>
                <div className="col-6">
                    <RadioButtonGroup 
                        defaultValue={formik.values.gender}
                        name="gender"
                        onSubmit={formik.submitForm}
                        onValueSet={formik.handleChange}
                        options={[{
                            src: male,
                            value: Gender.male,
                            alt:'Мужской',

                        },{
                            src: female,
                            value: Gender.female,
                            alt: 'Женский',
                        },{
                            src: transformer,
                            value: Gender.female,
                            alt: "Трансформер"
                        }
                        ]}
                    />
                    
                </div>
                <div className="col-6 mt-4 ml-2">
                    <p className="text-white">
                        Выбирай с помощью <kbd>&larr;</kbd> <kbd>&rarr;</kbd> Подтверди с помощью <kbd>&crarr;</kbd>
                    </p>
                </div>
            </div>
        </div>
    )
}