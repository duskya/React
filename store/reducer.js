import { ADD_ITEM , DELETE_ITEM , GET_LIST} from './actionType'

const defaultState ={
    inputValue:'Write Something',
    list:[
        '敲代码',
        '学习'
    ]
} //默认数据
// Reducer里只能接收state，不能改变state
export default (
    state = defaultState,action)=>{
        
        if(action.type === ADD_ITEM){
            let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
            // newState.inputValue = action.value
            newState.list.push(action.value)
            newState.inputValue=''
            return newState
        }
        // state原始状态仓库 action新传递状态
        if(action.type===DELETE_ITEM){
            let newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index,1)
            return newState

        }

        // if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        //     let newState = JSON.parse(JSON.stringify(state)) 
        //     newState.list = action.data.data.list //复制性的List数组进去
        //     return newState
        // }
           
        return state
}