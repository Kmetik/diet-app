import classNames from 'classnames'
import { push, } from 'connected-react-router'
import React, { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLinkProps, useLocation } from 'react-router-dom'


export const ConnectedNavLink:React.FC<NavLinkProps> = ({to,children,className}) => {
    const dispatch = useDispatch()
    const location = useLocation()
    function onClick(e:MouseEvent<HTMLAnchorElement>){
        e.preventDefault()
        if(typeof to === 'string') {
            dispatch(push(to))
        } else {
            dispatch(push({
                ...to
            }))
        }
    }
    const href = typeof to === 'string'? to.toString(): (to as Location).pathname
    const isActive = location.pathname === href
    const cn = classNames(className,{
        active: isActive
    })
    return (
            <a className={cn} href={href} onClick={onClick}>{children}</a>
    )
}