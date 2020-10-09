import React from 'react'
import { IBNR } from '../../utils/interfaces/bnr.interface'
import { SectorChart } from './sectorChart'
import { useContainerSize } from '../hooks/useContainerSize'

import './dailyDietChart.scss';

interface DailyDietChartProps {
    today:IBNR,
    limits: IBNR
}

export const DailyDietChart:React.FC<DailyDietChartProps> = ({today,limits})=>{
    const [container, size] = useContainerSize()
    const radius = size.width/9
    return (
        <div className="col-lg-6 card">
            <div className="card-body daily-diet-chart--container " ref={container}>
            <svg width={size.width} height={size.height}>
                <defs>
                <filter id="dropshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
                <feDropShadow stdDeviation="3 3" in="SourceGraphic" dx="-2" dy="-1" floodColor="#1F3646" floodOpacity="0.6" x="0%" y="0%" width="100%" height="100%" result="dropShadow"/>
                  <feOffset dx="-1" dy="-1" result="offsetblur"/> 
                  <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                </defs>
                <SectorChart 
                    position={{
                        x: size.width/4,
                        y: 0 + radius
                    }}
                    limit={limits.protein}
                    count={today.protein}
                    id="protein"
                    label = "Белок"
                    radius ={radius}
                    
                />
                <SectorChart 
                    position={{
                        x: size.width/2+radius,
                        y: 0 + radius
                    }}
                    limit={limits.carbohydrate}
                    count={today.carbohydrate}
                    id="carbohydrate"
                    label = "Углеводы"
                    radius ={radius}
                    
                />
                <SectorChart 
                    position={{
                        x: size.width/4,
                        y: size.height/2+radius
                    }}
                    limit={limits.fats}
                    count={today.fats}
                    id="fats"
                    label = "Жиры"
                    radius ={radius}
                    
                />
                <SectorChart 
                    position={{
                        x: size.width/2+radius,
                        y: size.height/2+radius
                    }}
                    limit={limits.energy}
                    count={today.energy}
                    id="energy"
                    label = "Калории"
                    radius ={radius}
                />
            </svg>
            </div>
            
        </div>
    )
}