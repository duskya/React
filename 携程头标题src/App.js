import * as  React from 'react';
import { connect } from "react-redux"
import {setFrom, setTo} from './store/actions';
import Header from './components/header/Header';
import './App.css'
import { useCallback } from 'react';
import Journey from './components/journey/Journey.jsx'
const App = (props) => {
  console.log(props);
  //性能优化 点击事件函数会带来header的更新
  //useCallback 不会更新

  const onBack = useCallback(() => {
    window.history.back();
  },[])
  const {from ,to} =props
  return (
    <div>
      <div className="header-wrapper">
        {/* title Header 通用  */}
        <Header title="火车票" onBack={onBack}/>
      </div>
      <from className="form">
        <Journey from ={from} to={to} />
      </from>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 对调， 城市选择
    setFrom(from) {
      dispatch(setFrom(from))
    },
    setTo(to) {
      dispatch(setFrom(to))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);