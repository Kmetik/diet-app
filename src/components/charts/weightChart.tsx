import React from 'react'
import { IWeightJournal } from '../../utils/interfaces/weightJournal.interface'
import { useContainerSize } from '../hooks/useContainerSize'

import './weightChart.scss'

interface WeightChartProps{
    data: IWeightJournal[]
}

export const WeightChart:React.FC<WeightChartProps> = ({data})=>{
    const [ref,size] = useContainerSize()
    const yAxisVals = data.map(v=>+v.value).sort()
    const delta = Math.round(yAxisVals[yAxisVals.length-1])- Math.round(yAxisVals[0]) 
    const scaleY = size.height / (delta + 2)
    const axisX = data.map((val,i)=>{
        const date = new Date(val.date).toLocaleDateString('ru-RU',{
            day: '2-digit',
            month: 'short'
        })
        const short = size.width/data.length*(i)+10
        const height = size.height

        return [
                <line key={`${i}_middle_line`} x1={short} y1={size.height} x2={short} y2={0} stroke="lightgray" strokeWidth="1" strokeDashoffset="2" strokeDasharray="4"></line>,
                <circle key={`${i}_middle_c`} cx={short} cy={size.height-((+val.value*scaleY)-(yAxisVals[0]*scaleY))-scaleY} r={2} fill="blue"></circle>,
                <circle key={`${i}_xAxis_c`} cx={short} cy={height} r={2} fill="gray"></circle>,
                <text key={`${i}_xAxis_t`} x={short -(date.length*2)} y={height+20}>{date}</text>]
    })
    const coords = data.map((value,i)=>{
        const yCoord = size.height-((+value.value*scaleY)-(yAxisVals[0]*scaleY))-scaleY
        const xCoord = size.width/data.length*(i)+10
        return [xCoord, yCoord]
    } )

    const axisXlines = Array.from({length: delta+2},(v,k)=> yAxisVals[yAxisVals.length-1] - --k).map((val,i)=>{
        return [
        <text key={`key_${val}_text`} y={(i*scaleY)} x={0}>{Math.round(val)}</text>,
        <line key={`key_${val}_line`} y1={i*scaleY} y2={i*scaleY} x1={0} x2={size.width} stroke="lightgray" strokeWidth="1" strokeDashoffset="2" strokeDasharray="4"></line>]
    })
    const makeBezier = () => {
        
        const controlPoint = (current: number[], previous?: any, next?: any, reverse?: any) => {
            const p = previous || current
            const n = next || current
            const smoothing = 0.2
            const o = line(p, n)
            const angle = o.angle + (reverse ? Math.PI : 0)
            const length = o.length * smoothing
            const x = current[0] + Math.cos(angle) * length
            const y = current[1] + Math.sin(angle) * length
            return [x, y]
          }
          const line = (pointA: number[], pointB: number[]) => {
            const lengthX = pointB[0] - pointA[0]
            const lengthY = pointB[1] - pointA[1]
            return {
              length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
              angle: Math.atan2(lengthY, lengthX)
            }
          }
          const bezierCommand = (point: any[], i: number, a: any[]) => {
            const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
            const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true)
            return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
          }
        
        const d= coords.reduce((acc, point, i, a) => {
            if(i===0) return  `M ${point[0]},${point[1]}`;
            else return `${acc} ${bezierCommand(point, i, a)}`
        },'')
        return <path d={d} fill="none" stroke="lightblue" strokeWidth="3" />
    }
    return (
        <div className="col-lg-6 card mt-1" ref={ref}>
            <div className="card-body">
            <div className="row align-items-center justify-content-center">
                <div className="weight-chart--container col-12" >
                    <svg width={size.width} height={size.height+30}>
                        {axisX}
                        {axisXlines}
                        <line x1={0} x2={size.width} y1={size.height} y2={size.height}  stroke='gray' strokeWidth="1" ></line>
                        {makeBezier()}
                    </svg>
                </div>
            </div>
            </div>
        </div>
        
    )
}