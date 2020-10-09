import React, { useCallback, SyntheticEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { SearchBarList } from '../lists/seachbarList'
import { searchByQuery } from '../../store/search/actions'
import {delay} from 'lodash'

export const SearchBar:React.FC = ()=>{
    const list = useSelector(({search}:RootState)=>search.list)
    const dispatch = useDispatch()
    const [drop,setDrop] = useState(false)
    const onSearch = useCallback((e:SyntheticEvent<HTMLInputElement>)=>{
        const query = e.currentTarget.value.trim()
        console.log(query)
        if(query.length > 3) {
            dispatch(searchByQuery(query))
        }
    },[dispatch])
    return (
            <div className="col-8">
                <div className="row">
                <div className="input-group m-1">
                    <input type="text" className="form-control" onInput={onSearch} onFocus={()=>setDrop(true)} onBlur={()=>delay(setDrop,200,false)}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Поиск</span>
                    </div>
                </div>
                </div>
                {drop && list && <SearchBarList list={list}/>}
            </div>
    )
}