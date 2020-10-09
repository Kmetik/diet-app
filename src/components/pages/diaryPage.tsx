import { isSameDay } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getConsumption } from '../../store/diary/actions'
import { DatePicker } from '../datePicker'
import { DiaryStats } from '../diaryStats'
import { DayBNRList } from '../lists/dayBNRList'
import { NavBar } from '../navbar'


export const DiaryPage:React.FC = ()=>{
    const [calendarDate, setDate] = useState(new Date())
    const {diary,journal} =  useSelector(({diary,user}:RootState)=>({diary, journal:user.profile.journal}))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getConsumption(calendarDate))
    },[calendarDate,dispatch])
    const record = journal.find((rec)=>isSameDay(new Date(rec.date),calendarDate))
    return (
        <div className="container-fluid">
            <NavBar/>
            <div className="row justify-content-center mt-2">
            <div className="col-lg-10 col-md-12">
                <div className="row">
                    <DatePicker choosenDate={calendarDate} onChange={setDate}/>
                    <div className="col-lg-7 col-md-7 col-xs-8">
                        <DiaryStats weight={record?.value} stats={diary.stats} date={calendarDate} />
                        <div className="row">
                            <div className="col-12">
                                <DayBNRList products={diary.consumption} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}