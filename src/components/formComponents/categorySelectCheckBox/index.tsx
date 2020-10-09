import React from 'react'
import classnames from 'classnames/bind'
import { IProductCategory } from '../../../utils/interfaces/productCategory.interface'
import styles from './categorySelectCheckBox.module.scss'


interface CategorySelectCheckBoxProps{
    handleChange(e:React.ChangeEvent<any>):void
    visible: boolean
    checked: boolean
    option: IProductCategory
}

const cx = classnames.bind(styles)

export const CategorySelectCheckBox:React.FC<CategorySelectCheckBoxProps> = ({handleChange,visible,option,checked})=>{
    const cl = cx("form-check","col-lg-2 col-md-4 col-sm-6 col-xs-6","p-1",{
        "d-none": visible
    })
    const label = cx('form-check-label')
    return (
        <div className={cl}>
            <input 
                className={styles['category-checkbox']} 
                onChange={handleChange}
                name="category" 
                type="checkbox" 
                value={+option.id} 
                id={option.id + 'category'}
                defaultChecked={checked}
                />
            <label className={label} htmlFor={option.id + 'category'}>
                <div className="col-4">
                    <img src={option.logo} alt={option.name} className="img-fluid"/>
                </div>
                <div className="col-8">
                    <span className="font-weight-light">{option.name}</span>
                </div>
            </label>
        </div>
    )
}