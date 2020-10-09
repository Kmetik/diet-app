import React from 'react'
import { useSearchParams } from '../hooks/useSearchParams'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

interface ListPaginationProps {
  pages:number
}

export const ListPagination:React.FC<ListPaginationProps> = ({pages})=>{
    const {params,setParam} = useSearchParams()
    const p = params?.page?parseInt(params.page.toString()):1

    function makePages (){
      if(pages - p < 3) return Array.from({length: 5},(v,k)=> pages -6 + ++k )
      if(pages <= 10) return Array.from({length:pages-2},(v,k)=>++k+1)
      else {
        if(p > 3) {
          return Array.from({length: 5},(v,k)=>p - 3 + ++k)
        }
        else return Array.from({length:pages > 5?5:pages},(v,k)=> ++k +1)
      }
    }
    function matchActive(page:number){
      if(page === 1 && !params?.page) return true
      //@ts-ignore
      else return page === params?.page
    }
    const pageList = makePages().map(p=>{
      const className = classNames("page-item",{
        "active": matchActive(p)
      })
      return (
      <li className={className} key={p+'page'}>
        <Link to={setParam('page',p)} className="page-link"> 
          {p}
        </Link>
      </li>
    )})
    const className =(p:number)=> classNames("page-item",{
      "active": matchActive(p)
    })
    return (
        <div className="row justify-content-center">
          <nav>
          <ul className="pagination">
            <li className={className(1)} >
              <Link to={setParam('page',1)} className="page-link"> 
                1
              </Link>
            </li>
            {p > 3 &&  <li className="page-item"><span className="page-link">...</span></li>}
            {pageList}
            {pages-p > 3 &&  <li className="page-item"><span className="page-link">...</span></li>}

            <li className={className(pages)} >
              <Link to={setParam('page',pages)} className="page-link"> 
                {pages}
              </Link>
            </li>
            
          </ul>
        </nav>
        </div>
    )
}