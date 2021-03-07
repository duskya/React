import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd'
class TodoListUI  extends Component {
  
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.props.inputValue} style={{width:'300px'}} id='AddValue' />
                    <Button type='primary' onClick={this.props.add}>添加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    {/* <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />     */}
                    {/* 当使用 dataSource 时，可以用 renderItem 自定义渲染列表项 */}
                    {
                        this.props.list.map((item,index)=>{
                            return(                                
                                <li  key={index} >
                                    {item}
                                    <Button onClick={this.props.deleteItem.bind(this,index)}>删除</Button>
                                </li>                                       
                            )
                        })
                    }      
                </div>       
            </div>
         );
    }
}
 
export default TodoListUI ;