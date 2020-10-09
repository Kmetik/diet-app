import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { NavbarItem } from './navbarItem'

import { NavbarProfile } from './navbarProfile'

export const NavBar:React.FC = ()=>{

    const user = useSelector((state:RootState)=> state.user.profile)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-lg-between rounded-bottom">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                        {/* <NavLink to="/" className="nav-item"  activeClassName="active"> Главная </NavLink> */}
                        <NavbarItem to="/">Главная</NavbarItem>
                        <NavbarItem to="/diary">Дневник</NavbarItem>
                        <NavbarItem to="/products">Продукты</NavbarItem>
                    
                </ul>
            </div>
            <NavbarProfile user={user}/>
        </nav>
    )
}