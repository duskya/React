import React , {Component} from 'react';
import 'antd/dist/antd.css';
// import {List,Button, Input} from 'antd';
import store from './store';
import { ADD_ITEM , DELETE_ITEM } from './store/actionType'
import TodoListUI  from './TodoListUI'
// import axios from 'axios';
import {getTodoList} from './store/actionCreatores'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.add =this.add.bind(this)
        //转变this指向 
        this.storeChange=this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this) 
        store.subscribe(this.storeChange) //订阅redux状态       
    }

    // componentDidMount(){
    //     const action =getTodoList()
    //     store.dispatch(action)
    // }
    
    add(){
        let a=document.getElementById("AddValue")
        console.log(a)
        const action ={
                type: ADD_ITEM ,
                value:a.value
            }
            store.dispatch(action)          
    }

    storeChange(){
        this.setState(store.getState())
        // console.log(this.setState)
    }

    deleteItem(index){
        console.log(index)
        const action ={
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }

    render() { 
        return ( 
            <TodoListUI  
                inputValue={this.state.inputValue}
                list={this.state.list}
                add ={this.add}
                storeChange={this.storeChange}
                deleteItem={this.deleteItem}
            />
        );
    }
        
}

export default TodoList;