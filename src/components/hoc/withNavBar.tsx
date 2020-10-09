import React, { ComponentType } from 'react'
import { NavBar } from '../navbar'

export function withNavBar<P>(Component:ComponentType<P|any>){
    return (props:React.ComponentProps<any>)=>(
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
            <div className="col-10">
                    <Component {...props}/>
                </div>
            </div>
        </div>
    )
}