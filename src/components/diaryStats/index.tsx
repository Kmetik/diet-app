import React from "react"
import { Link, useLocation } from "react-router-dom"
import { IBNR } from "../../utils/interfaces/bnr.interface"

import './diaryStats.scss'

interface DiaryStatsProps {
    stats: IBNR
    weight?:string,
    date: Date
}

export const DiaryStats:React.FC<DiaryStatsProps> = ({stats,weight,date})=> {
    const location = useLocation()
    return (
        <div className="row diary-stats--container">
            <div className="col-12 card">
                <div className="row align-items-center pt-2 ml-1">
                    <div className="col carbohydrate">
                        <div className="row justify-content-center daily-stats-data">
                            <span>{stats.carbohydrate.toFixed()}</span>
                        </div>
                        <div className="row justify-content-center">
                            <p className="daily-stats-label">Углеводы</p>
                        </div>
                    </div>
                    <div className="col protein">
                        <div className="row justify-content-center daily-stats-data">
                            <span>{stats.protein.toFixed()}</span>
                        </div>
                        <div className="row justify-content-center">
                            <p className="daily-stats-label">Белки</p>
                        </div>
                    </div>
                    <div className="col fats">
                        <div className="row justify-content-center daily-stats-data">
                            <span>{stats.fats.toFixed()}</span>
                        </div>
                        <div className="row justify-content-center">
                            <p className="daily-stats-label">Жиры</p>
                        </div>
                    </div>
                    <div className="col energy">
                        <div className="row justify-content-center daily-stats-data">
                            <span>{stats.energy.toFixed()}</span>
                        </div>
                        <div className="row justify-content-center">
                            <p className="daily-stats-label">Энергия</p>
                        </div>
                    </div>
                        {!weight && 
                                <Link to={{
                                    pathname:"/weight-control",
                                    state: {
                                        date: date,
                                        weightUpdate: location
                                    }
                                }} className="add-link col d-flex flex-column align-items-center"> 
                                    <span>
                                        Нет данных
                                    </span>
                                    <span className="big-pulsing-rounded-btn">+</span>
                                    <span>Добавь</span>
                                </Link>
                        }
                        {weight && 
                                 <div className="col d-flex flex-column align-items-center">
                                    <span>кг,вес:</span>
                                    <h4>{weight}</h4>
                                 </div>}
                        
                </div>
                <hr/>
            </div>
        </div>
    )
}