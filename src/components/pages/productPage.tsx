import React from 'react'
import { useParams } from 'react-router'
import { Modal } from '../modal/modal'
import { ProductCard } from '../productCard/productCard'

export const ProductPage:React.FC = ()=>{
    const {id} = useParams<{id:string}>()
    return (
            <Modal>
                <ProductCard id={parseInt(id)}/>
            </Modal>
        )
}