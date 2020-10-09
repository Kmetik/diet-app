import React from 'react'
import { Switch, Route, useLocation } from 'react-router'
import { RegPage } from '../pages'
import { StatsPage } from '../pages/statsPage'
import { ProductCategoryPage } from '../pages/productCategoryPage'
import { ProductsListPage } from '../pages/productsListPage'
import { ProductPage } from '../pages/productPage'
import { Location } from 'history'
import { DiaryPage } from '../pages/diaryPage'
import { LoginPage } from '../pages/loginPage'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { ProtectedRoute } from './protectedRoute'
import { WeightControlModal } from '../weightControlModal'

export const Routes:React.FC =  ()=>{
    const location = useLocation<{background?:Location, weightUpdate?: Location}>()
    const weightModal = location.state && location.state.weightUpdate
    const bg =location.state &&  location.state.background
    const user = useSelector((state: RootState)=>state.user.profile.name)
    
    return (
        <> 
        <Switch 
        location={bg || weightModal || location}>
          <Route path="/login" component={LoginPage} />
          <Route path="/reg" component={RegPage} exact/>
          <ProtectedRoute path="/" exact comp={StatsPage} user={user} />
          <ProtectedRoute path="/category/" comp={ProductCategoryPage}/>
          <ProtectedRoute path="/products" comp={ProductsListPage} user={user}/>
          <ProtectedRoute path="/diary" comp={DiaryPage} user={user}/>
          
        </Switch>
        {bg && <Route path="/product/:id" exact component={ProductPage}/>}
        {weightModal && <ProtectedRoute path="/weight-control"  user={user} comp={WeightControlModal}/> }
        </>
        )
}