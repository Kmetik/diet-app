import React, { MouseEvent } from 'react'
import { NavLinkProps, useHistory } from 'react-router-dom'
import classNames from 'classnames'



export const NavbarItem:React.FC<NavLinkProps> = ({to,children}) => {
    const history = useHistory()
    
    function onClick(e:MouseEvent<HTMLAnchorElement>){
        e.preventDefault()
        history.push(to.toString())
    }
    const isActive = history.location.pathname === to
    const cn = classNames('nav-item',{
        active: isActive
    })
    return (
        <li className={cn}>
            <a className="nav-link" href={to.toString()} onClick={onClick}>{children}</a>
        </li>
    )
}