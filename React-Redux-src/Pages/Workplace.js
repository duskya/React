import React from "react"
import {Route,Link} from 'react-router-dom';
import Money from './workPlace/Money'
import Getup from './workPlace/Getup'

function WorkPlace(){
    return(
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/Money">加薪</Link></li>
                    <li><Link to="/workplace/Getup">起床</Link></li>
                </ul>
            </div>
            <div className ="videoContent">
                <div><h3>职场技能</h3></div>
                <Route path="/workplace/Money" component={Money}></Route>
                <Route path="/workplace/Getup" component={Getup}></Route>
            </div>
        </div>
    )
}
export default WorkPlace