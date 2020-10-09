import React, { useEffect, useState, SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getProduct } from '../../store/product/action'
import { ProductCardBody } from './productCardBody'
import { goBack } from 'connected-react-router'
import { IProduct } from '../../utils/interfaces/product.interface'
import { callConsumptionAddEvent } from '../../store/diary/actions'

interface ProductCardProps {
    id: number
}

export const ProductCard:React.FC<ProductCardProps> = ({id})=>{
    const [weight,setWieght] = useState(100)
    const dispatch = useDispatch()
    const {loading,error, product} = useSelector(({product}:RootState)=>product)
    useEffect(()=>{
        function getData(id:number){
            dispatch(getProduct(id))
        }
        getData(id)
        
    },[id,dispatch])
    const weightChange = (e:SyntheticEvent<HTMLInputElement>)=>{
        setWieght(parseInt(e.currentTarget.value))
    }
    const close = ()=>{
        dispatch(goBack())
    }

    const save = (product:IProduct)=>{
        dispatch(callConsumptionAddEvent(product,weight))
    }

    return(
        <div className="row">
            {error && <p className="text-danger">{error}</p>}
            {!loading &&  product && <ProductCardBody weightChange={weightChange} product={product} weight={weight} onClose={close} onSave={()=>save(product)}/>}
        </div>
    )
}