import { goBack } from 'connected-react-router'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { CSSTransition } from 'react-transition-group'
import { updateWeightJournal } from '../../store/user/actions'
import { Modal } from '../modal/modal'

import './transition.scss'

export const WeightControlModal:React.FC = ()=> {
    const location = useLocation<{date: Date}>()
    return (
        <Modal>
            <Logic date={location.state.date} />            
        </Modal>
    )
}

const Logic:React.FC<{date:Date}> = ({date})=> {
    const [weight, setWeight] = useState('')
    const [show, setShow] = useState(false)

    useEffect(()=>{
        setShow(true)


    },[])
    const dispatch = useDispatch()
    const onSave = () => {
        dispatch(updateWeightJournal(weight.toString(),date))
        onCancel()
    }
    const handleInput = (e:SyntheticEvent<HTMLInputElement>) => {
        setWeight(e.currentTarget.value)
    }
    const onCancel =()=>dispatch(goBack())

    return (
        <CSSTransition
            in={show}
            classNames="modal"
            timeout={300}
            onExited={onCancel}
        >
        <div className="modal-content card bg-primary p-2">
     
        <div className="modal-body">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <h4 className="text-white">
                            Твой вес на {date.toLocaleDateString()}
                        </h4>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <input type="number" name="weight" className="form-control" onChange={handleInput} defaultValue={weight.toString()}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" onClick={onSave}>Сохранить</button>
                                <button className="btn btn-danger" onClick={()=>setShow(false)}>Отмена</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </CSSTransition>    
    )
}