import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'mobx-react';
import App from './App';
import articlesStore from './stores/articlesStore'
import {HashRouter} from 'react-router-dom';
import usersStore from './stores/usersStore'

// console.log(acticlesStore, '--------------')
// import reportWebVitals from './reportWebVitals'
// 任何复杂应用都可以细分
// 组件和数据分离

const stores = {
    articlesStore,
    usersStore
}
ReactDom.render(       
    // Provider使用React的上下文（context）机制，可以用来向下传递stores，即把state传递给其子组件
    //有多个store
            <Provider {...stores}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>,
        document.body
    )
// import store from './store'
// //组件与数据流的模块化
// import {Provider} from 'mobx-react';
// //给我们组件提供状态管理 
// ReactDom.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.body
// )