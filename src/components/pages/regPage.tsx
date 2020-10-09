import React from 'react'
import { RegForm } from '../forms/regForm'
import { RegStepsNav } from '../regStepsNav'


export const RegPage: React.FC = ()=>{
    return (
           <div className="container-fluid">
                <RegForm/>
                <RegStepsNav/>

           </div>
    )
}