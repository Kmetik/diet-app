import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { setCurrentUser } from '../../store/user/actions'
import { getUsers } from '../../store/users/actions'
import { UserCard } from '../userCard'


export const LoginPage:React.FC = ()=> {
    const dispatch = useDispatch()
    const {users,loading} = useSelector((state:RootState)=>state.login)
    function onUserChoose(id:number) {
        const user = users.find(u=>u.id === id)
        if(user) {
            dispatch(setCurrentUser(user))
        }
    }

    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])

    const list = users.map(u=><UserCard key={`${u.id}+user`}user={u} onEnter={onUserChoose}/>)

    return (
        <div className="container-fluid">
            <div className="row vh-100 justify-content-center align-items-center bg-primary">
            {!loading && <div className="col-lg-4 col-md-10 col-sm-12">
                <div className="row">
                    {users.length > 0 && list}
                </div>
                <div className="row">
                    <div className="col-auto">
                        <Link to="/reg/name">
                        <button className="btn text-white">
                            Создать пользователя
                        </button>
                        </Link>
                    </div>
                </div>
            </div>}
        </div>
        </div>
    )
}