import React, { SyntheticEvent, useState } from 'react'
import styles from './regSteps.module.scss'
import { RegStepProps } from '../hoc/regStepsHoc'


interface BirthdayStepState {
    month: string,
    day: string,
    year: string
}

export const BirthdayStep:React.FC<RegStepProps> = ({formik})=>{
    const [probablyDate, setDate] = useState<BirthdayStepState>(()=>{
        if(formik.values.birthday) {
            const bd = new Date(formik.values.birthday)
            return {
                day: bd.getDate().toString().padStart(2,'0'),
                month: (bd.getMonth()+1).toString().padStart(2,'0'),
                year: bd.getFullYear().toString()
            }
        }
        return {
        month: '',
        day: '',
        year: ''}
    })


    const buildDate = (e:SyntheticEvent<HTMLInputElement>)=>{
        const target = e.currentTarget
        const newState = {
            ...probablyDate,
            [target.name]:target.value}
        setDate(newState)
        
        submit(newState)

    }

    function submit(date:BirthdayStepState){
        formik.setFieldValue('birthday',Object.values(date).join('-'))
    }
    return(
        <div className="col-12 text-white bg-success">
            <div className="row min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-8 col-md-11">
                    <h1 className={styles['reg-step']}>Твоя дата рождения</h1>
                </div>
                <div className="col-lg-8 col-md-11">
                    <div className="row align-items-md-center">
                    <div className="col-lg-3 col-md-4">
                    <label>
                        Месяц:
                        <input type="number" name="month" placeholder="08" onChange={buildDate} defaultValue={probablyDate.month}/>
                    </label>
                    </div>
                    <div className="col-lg-3 col-md-4">
                    <label>
                        День:
                        <input type="number" name="day" placeholder="23" onChange={buildDate} defaultValue={probablyDate.day}/>
                    </label>
                    </div>
                    <div className="col-lg-3 col-md-4">
                    <label>
                        Год:
                        <input type="number" name="year" placeholder="1989" onChange={buildDate} defaultValue={probablyDate.year}/>
                    </label> 
                    </div>
                    </div>                
                </div>
                <div className="col-8">
                    {formik.errors.birthday && <span className="text-warning">{formik.errors.birthday}</span>}
                </div>
            </div>
         </div>
    )
}