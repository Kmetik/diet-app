import React, { useState } from 'react'
import { IProductCategory } from '../../../utils/interfaces/productCategory.interface'
import { useFormikContext } from 'formik'
import { ISortParams } from '../../productFilter/productFilter'
import { CategorySelectCheckBox } from '../categorySelectCheckBox'

interface CategorySelectProps {
    options?: IProductCategory[]
}

export const CategorySelect:React.FC<CategorySelectProps> = ({options})=>{
    const {handleChange,values} = useFormikContext<ISortParams>()
    const [show, setShow] = useState(false)
    const list = options?.map((option,idx)=>{
        const visible = idx < 6 || show?false:true
        const checked = ()=>{
            if(Array.isArray(values.category)) return values.category.includes(option.id)
            else return values.category === option.id
        }
        return <CategorySelectCheckBox 
                handleChange={handleChange}
                visible={visible}
                checked={checked()}
                option={option}
                key={idx+'category'}
                />
    })
    return (
        <div className="col-12">
            <div className="row justify-content-center shadow-sm bg-white rounded">
                {list}
                <div className="col-12">
                    {show?
                        <button className="btn btn-sm" onClick={()=>setShow(false)}>Скрыть</button>:
                        <button className="btn btn-sm btn-toolbar" onClick={()=>setShow(true)}>Показать все...</button>}

                </div>
            </div>
        </div>
    )
}