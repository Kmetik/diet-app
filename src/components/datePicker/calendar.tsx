import classNames from "classnames"
import { getDate, isEqual, startOfDay, startOfMonth } from "date-fns"
import React from "react"
import { monthMaker } from "../../utils/dateUtils"

interface CalendarProps {
    onChange: (d: Date)=> void
    choosenDate: Date
}

export const Calendar:React.FC<CalendarProps> = ({choosenDate, onChange})=> {
    const offset = startOfMonth(choosenDate).getDay() === 0? 6: startOfMonth(choosenDate).getDay()-1
    const list = monthMaker(choosenDate).map(date=><CalendarItem key={date.toString()} isActive={isEqual(startOfDay(choosenDate),date)} date={date} onChange={onChange}/>)
    return (
        <div className="calendar--wrapper">
        <span>Пн.</span>
        <span>Вт.</span>
        <span>Ср.</span>
        <span>Чт.</span>
        <span>Пт.</span>
        <span>Сб.</span>
        <span>Вс.</span>
        {
            Array.from({length: offset},(v,k)=> <div className="calendar-date-prev" key={'prev'+k}></div>)
        }
        {
           list
        }
    </div>
    )
}

interface CalendarItemProps {
    isActive: boolean,
    date: Date,
    onChange: (d: Date)=> void

}
const CalendarItem:React.FC<CalendarItemProps> = ({isActive, date, onChange })=> {
    const cx = classNames('calendar-date',{
        'active': isActive
    })
    return <div className={cx} onClick={()=>onChange(date)}>{getDate(date)}</div>
}