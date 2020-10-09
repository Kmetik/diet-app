import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from '../hooks/useSearchParams'


interface ListPaginationProps {
    next: boolean
}

export const NewListPagination: React.FC<ListPaginationProps> = ({next})=> {
    const {params,setParam} = useSearchParams()
    const page = params.page?+params.page:null

    return (
        <div className="row justify-content-center">
            <nav>
                <ul className="pagination">
                {page && page > 1 && <Link to={setParam('page',page-1)}>
                    <li className="page-item">
                    Предыдущий    
                    </li></Link>}
                {next && <Link to={setParam('page',page?page+1:2)}>
                    <li className="page-item">
                        Следующий    
                    </li></Link>}
                </ul>
            </nav>
        </div>
    )
}