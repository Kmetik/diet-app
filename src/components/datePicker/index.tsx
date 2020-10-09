import React from "react"
import { Calendar } from "./calendar"
import './calendar.scss'
import { CalendarControls } from "./controls"

interface DatePickerProps {
    choosenDate: Date
    onChange: (date: Date) => void
}

export const DatePicker:React.FC<DatePickerProps> =({choosenDate,onChange})=>{
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 card">
                        
            <CalendarControls choosenDate={choosenDate} onChange={onChange}/>
            <Calendar choosenDate={choosenDate} onChange={onChange}/>
        </div>
    )
}