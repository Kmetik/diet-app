import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Gender } from '../../utils/enums/gender.enum'
import { IUser } from '../../utils/interfaces/user.interface'

import './navbarProfile.scss'

interface NavbarProfileProps {
    user: IUser
}

export const NavbarProfile:React.FC<NavbarProfileProps> = ({user})=> {
    const [display, setDisplay] = useState(false)
    return (
            <div className="col-auto nav-profile--container d-flex flex-column align-items-center">
                <button className="btn profile-actions-btn" onClick={()=>setDisplay(val=>!val)}><span>{user.name}</span>⚙</button>
            
                <CSSTransition
                    in={display}
                    timeout={300}
                    classNames="item"
                    unmountOnExit
                >
                     <ul className="nav-profile--actions">
                        <li>
                            <Link to={{
                                pathname:'/reg/name',
                                state:{
                                    isEditing: true
                                }
                            }}> <span>Редактировать</span>  <span>✏</span></Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname:'/login',
                                state:{
                                    isEditing: true
                                }
                            }}> <span>Выйти</span> <span>{user.gender === Gender.female? '🙋‍♀️':'🙋‍♂️'}</span></Link>
                        </li>
                    </ul>  
                </CSSTransition>
            </div>
    )
}