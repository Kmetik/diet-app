import { addMonths, addYears } from "date-fns"
import React from "react"

interface CalendarControlsProps {
    choosenDate: Date
    onChange: (d: Date)=> void
}

export const CalendarControls:React.FC<CalendarControlsProps> =({choosenDate,onChange})=> {
    return (
        <div className="row justify-content-end align-items-center mr-2 date-controls--container">
                
                <div className="col-auto">
                    <div className="row justify-content-end align-items-end flex-column date-controls">
                        <div className="d-flex flex-row align-items-center">
                            <span className="control-unit" onClick={()=>onChange(addMonths(choosenDate,-1))}>&larr;</span><span>{choosenDate.toLocaleDateString('ru-RU',{month:'long'})}</span><span className="control-unit" onClick={()=>onChange(addMonths(choosenDate,1))}>&rarr;</span>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <span className="control-unit" onClick={()=>onChange(addYears(choosenDate,-1))}>&larr;</span><span>{choosenDate.toLocaleDateString('ru-RU',{year:'numeric'})}</span><span className="control-unit" onClick={()=>onChange(addYears(choosenDate,1))}>&rarr;</span>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <p className="display-4">
                        {choosenDate.getDate()}
                    </p>
                </div>
                
            </div>
    )
}