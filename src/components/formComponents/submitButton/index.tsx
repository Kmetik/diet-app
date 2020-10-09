import React, { SyntheticEvent } from 'react'


interface SubmitButtonProps {
    submitForm(e:SyntheticEvent<any>):void
    label?: string
}

export const SubmitButton:React.FC<SubmitButtonProps> = ({submitForm,label = `Продолжить`})=>{

    return (
        <div className="col-12 d-flex justify-content-end p-4 fixed-bottom">
            <button className="btn text-white btn-light" onClick={submitForm}>{label}</button>
        </div>
    )
}