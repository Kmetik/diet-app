import React from 'react'
import {createPortal} from 'react-dom'
import usePortal from '../hooks/usePortal'

export const Modal:React.FC =({children})=>{
    const portal = usePortal()
    return createPortal(

                <div className="modal-dialog">
                    {children}
                </div>
        
        ,portal)
}