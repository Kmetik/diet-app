import React from 'react'
import { useLocation } from 'react-router-dom'
import { ConnectedNavLink } from '../navbar/connectedNavLink'

import './regStepsNav.scss'

export const RegStepsNav:React.FC = ()=> {
    const location = useLocation<{isEditing?:boolean}>()
    const isEditing = location.state && location.state.isEditing
    const routeState = {
        isEditing: isEditing 
    }
    return (
        <div className="reg-nav">
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/name',
                state:routeState
            }}>Имя</ConnectedNavLink>
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/gender',
                state:routeState
            }}>Пол</ConnectedNavLink>
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/birthday',
                state:routeState
            }}>Дата рождения</ConnectedNavLink>
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/weight',
                state:routeState
            }}>Вес</ConnectedNavLink>
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/height',
                state:routeState
            }}>Рост</ConnectedNavLink>
            <ConnectedNavLink className="link" activeClassName="active" to={{
                pathname: '/reg/activityLevel',
                state:routeState
            }}>Активность</ConnectedNavLink>
        </div>
    )
}