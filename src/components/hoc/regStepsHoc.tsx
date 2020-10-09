import React, { ComponentType } from 'react'
import { useFormikContext, FormikContextType } from 'formik'
import { SubmitButton } from '../formComponents/submitButton'
import { UserRegForm } from '../../utils/interfaces/userRegForm.interface'
import { useLocation } from 'react-router'

export interface RegStepProps {
    formik: FormikContextType<UserRegForm>
}

const withFormik =<P extends RegStepProps> (Step:ComponentType<P|any>)=>{
    return ()=>{
        const location = useLocation<{isEditing?:boolean}>()
        const formik = useFormikContext<UserRegForm>()
        const isEditing = location.state && location.state.isEditing
        return (
            <>
            <Step formik={formik} />
            <SubmitButton submitForm={formik.submitForm} label={isEditing===true?'Сохранить':"Продолжить"}/>
            </>
        )
    }
}

export default withFormik;
