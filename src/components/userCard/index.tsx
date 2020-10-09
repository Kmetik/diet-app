import React from 'react'
import { IUser } from '../../utils/interfaces/user.interface'

import './userCard.scss'

interface UserCardProps {
    user: IUser
    onEnter: (id:number)=>void
}

export const UserCard:React.FC<UserCardProps> = ({user,onEnter}) => {
    return (
        <div className="col-12 mb-2">
            <div className="user-card">
                <div className="user-img">
                    <span>{user.name[0].toUpperCase()}</span>
                </div>
                <h3>{user.name}</h3>
                <button className="btn button-outline" onClick={()=>onEnter(user.id)}>
                    <span role="img" aria-label="emoji">👉</span> 
                </button>
            </div>
        </div>
    )
}