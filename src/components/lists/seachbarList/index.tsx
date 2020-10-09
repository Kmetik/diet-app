import React from 'react'
import { IProduct } from '../../../utils/interfaces/product.interface'
import { SearchListItem } from '../../listItems/searchListItem'
import classnames from 'classnames/bind'
import styles from './searchbarList.module.scss'


interface SearchBarListProps{
    list: IProduct[]
}

const cx = classnames.bind(styles)

export const SearchBarList:React.FC<SearchBarListProps> = ({list})=>{
    const listItems = list.map(item=><SearchListItem {...item} key={item.id}/>)
    const classNames = cx('col-12','search-bar-list')
    return(
        <div className="row">
            <div className={classNames}>
                <ul className="list-group">
                    {listItems}
                </ul>
            </div>
        </div>
    )
}