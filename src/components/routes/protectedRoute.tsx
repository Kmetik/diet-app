import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

interface ProtectedRouteProps extends RouteProps{
    comp: React.ElementType,
    user?: string
}

export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({comp:Component,user,...routeProps}) => {
    return (
        <Route {...routeProps} render={(props)=> {
            if(!user) return <Redirect to="/login"/>
            else return <Component {...props}/>
        }} />
    )
}