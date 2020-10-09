import React, { useEffect } from 'react'
import { DailyDietChart } from '../charts/dailyDietChart'
import { WeightChart } from '../charts/weightChart'
import { DayBNRControl } from '../dayBNRcontrol'
import { WeightWidget } from '../weightWidget'
import { NavBar } from '../navbar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { countLimits, updateWeightJournal } from '../../store/user/actions'
import { getConsumption } from '../../store/diary/actions'
import { compareAsc, isSameDay } from 'date-fns'


export const StatsPage:React.FC = ()=>{
    
    const dispatch = useDispatch();
    const {user, diary} = useSelector((state: RootState)=>({user:state.user,diary:state.diary}));
    useEffect(()=>{
        function start() {
            dispatch(countLimits())
            dispatch(getConsumption())
        }
        start()
    },[dispatch])

    function updateJournal(weight:string){
        dispatch(updateWeightJournal(weight))
    }
    
    return (
        <div className="container-fluid">
            <NavBar />
            <div className="row justify-content-center mt-2">
            
            <div className="col-10">
                <div className="row">
                    <DailyDietChart today={diary.stats} limits={user.bnr.limits} />
                    <DayBNRControl products={diary.consumption}/>
                </div>
                <div className="row">
                    <WeightChart data={user.profile.journal.sort((a,b)=>compareAsc(new Date(a.date),new Date(b.date)))}/>
                    <WeightWidget defaultWeight={user.profile.journal.find(v=>isSameDay(new Date(v.date),new Date()))?.value??''} onSave={updateJournal}/>
                </div>
            </div>
        </div>
        </div>
    )
}