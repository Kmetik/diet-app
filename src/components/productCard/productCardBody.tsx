import React, {SyntheticEvent } from 'react'
import { IProduct } from '../../utils/interfaces/product.interface'


interface ProdcutCardBody {
    product:IProduct
    weight: number
    weightChange(e:SyntheticEvent<HTMLInputElement>):void
    onClose ():void
    onSave():void
}

export const ProductCardBody:React.FC<ProdcutCardBody> = ({product,weight,onClose, onSave,weightChange})=>{
    const ratio = weight/100
    const withRatio = (n:number):number=>{
        return Math.floor((n *ratio)*100) / 100 || 0
    }
    return(
        <div className="modal-content">
            <div className="modal-header">
                <h4>{product.name}</h4>
            </div>
        <div className="modal-body">
            <div className="row justify-content-center">
                <div className="col-12">
                    <table className="table w-100">
                        <tbody>
                            <tr>
                                <th>Протеин</th>
                                <td>{withRatio(product.protein)}</td>
                            </tr>
                            <tr>
                                <th>Углеводы</th>
                                <td>{withRatio(product.carbohydrate)}</td>
                            </tr>
                            <tr>
                                <th>Жиры</th>
                                <td>{withRatio(product.fats)}</td>
                            </tr>
                            <tr>
                                <th>Энергия</th>
                                <td>{withRatio(product.energy)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div className="modal-footer">
            <div className="col-12">
                <div className="row align-items-center justify-content-center">
                    <div className="col-7">
                        <input type="number" defaultValue={weight.toString()} onChange={weightChange} className="form-control text-dark text-center"/>

                    </div>
                    <div className="col-5">
                    <div className="row d-flex flex-row align-items-center justify-content-end">
                    <button onClick={onSave} className="btn btn-success mr-1">Добавить</button>
                    <button className="btn btn-outline-dark" onClick={onClose}>
                        Закрыть
                    </button>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    
    )
}