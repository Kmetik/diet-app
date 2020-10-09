import React from 'react'
import { getCirclePos, getAngle } from './utils'
import style from './sectorChart.module.scss'

interface SectorChartProps {
    count: number,
    limit: number,
    label: string,
    id: string,
    position:{
        x: number,
        y: number
    },
    radius: number
}

export const SectorChart:React.FC<SectorChartProps> = ({count,limit,label,id,position,radius})=>{
    const strokeWidth = radius/4;
    const angle = getAngle(count,limit)
    const {rx,ry,x,y,flag,z} = getCirclePos({x:position.x,y:position.y+20},radius,angle)
    return (
        <>
        <text x={position.x - label.length*3} y={position.y+20} fontSize={radius/6}>{label}</text>
        <text x={position.x - label.length*2} y={position.y + strokeWidth*2} fontSize={radius/5}>{count.toFixed()}</text>
        <text x={position.x - label.length*2} y={position.y + strokeWidth*3} fontSize={radius/7} fill="#bdc3c7">/{limit.toFixed()}</text>
        <circle  className={style.circle} cx={position.x} cy={position.y+20} r={radius} fill="none" stroke="transparent" strokeWidth={strokeWidth}/>
        <path filter="url(#dropshadow)" className="bnr-path" id={style[id]} d={`M${x?x:1} ${y?y:1} A ${radius} ${radius} 0 ${flag} 0 ${rx} ${ry} ${z}`} strokeWidth={strokeWidth}></path>
        </>
    )
} 