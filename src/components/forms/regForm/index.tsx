import React from 'react'
import {Formik, FormikErrors} from 'formik'
import { IUser } from '../../../utils/interfaces/user.interface'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import fadeTransition  from './routeTransition.module.scss'
import { NameStep,GenderStep,ActivityLevel,WeightAndHeight,BirthdayStep } from '../../regSteps'
import { RootState } from '../../../store'
import { BrowserRouter } from 'react-router-dom'
import { formSubmit } from '../../../store/user/actions'
import { UserRegForm } from '../../../utils/interfaces/userRegForm.interface'


export const routes = {
    name: NameStep,
    gender: GenderStep,
    birthday: BirthdayStep,
    weight: WeightAndHeight,
    height: WeightAndHeight,
    activityLevel: ActivityLevel
}

export const RegForm:React.FC = ()=>{
    const match = useRouteMatch()
    const location = useLocation<{isEditing?:boolean}>()
    const dispatch = useDispatch()
    const userData = useSelector<RootState, IUser>((store)=>store.user.profile)
    const setupRoute = (values:Object)=>{
        const entries = Object.entries(values)
        const route = entries.find((entry)=>!entry[1])
        return route;
    }

    const isEditing = location.state && location.state.isEditing
   

    const routesList = Object.entries(routes).map((([path,Step],idx)=>{
        return <Route exact path={`${match.path}/${path}`} key={idx} component={Step}/>
    }))
    return (
        <BrowserRouter basename="/reg">
        <Formik 
            initialValues={{
                name: isEditing?userData.name:'',
                birthday: isEditing?userData.birthday: '',
                activityLevel:isEditing?userData.activityLevel: 0,
                weight:isEditing?userData.weight:0,
                height:isEditing?userData.height:0,
                gender:isEditing?userData.gender: ''
            }}
            validate={(values)=>{
                const errors:FormikErrors<UserRegForm> = {}
                if(values.name && !/^[a-zA-Zа-яА-Я]+/.test(values.name)) errors.name = "Русские и латинские буквы, без цифр и знаков"
                if(values.birthday && !new Date(values.birthday).getDate()) errors.birthday ="Неверная дата"
                return errors;
            }}
            onSubmit={(values,actions)=>{
                const route = setupRoute(values)
                if(route) dispatch(push(route[0],{isEditing: isEditing}))
                else {
                    const id = isEditing === true?userData.id:undefined
                    dispatch(formSubmit({
                        ...values,
                        journal:[]
                    },id))
                }
            }}

            validateOnChange = {true}
        >
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames={fadeTransition}
                    timeout={1000}
                    >
                    <div className="row align-items-sm-center reg-container">
                        <Switch location={location}>
                            {routesList} 
                        </Switch>
                    
                    </div>

                </CSSTransition>
            </TransitionGroup>
        </Formik>
        </BrowserRouter>
    )
}