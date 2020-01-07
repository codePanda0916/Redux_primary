import React, { Fragment } from 'react';
import { Button, Input, List, message } from "antd";
import store from '../../store/index';
import * as Action from '../../store/actionTypes';
import axios from 'axios';
import 'antd/dist/antd.css';
import './index.css';

class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list || []
    };
    this.storeChange = this.storeChange.bind(this);
    // 监听变化
    store.subscribe(this.storeChange);
  }

  componentDidMount(){
    axios.get('https://www.fastmock.site/mock/3f94e62cde64a86aada771f535ea28b5/getList/api').then(res => {
      const data = res.data;
      const action = {
        type: Action.GET_DATA,
        data
      }
      store.dispatch(action);
    }).catch(err => {
      console.log(err);
    })
  }

  changeInput (e) {
    const action = {
      type: Action.CHANGE_INPUT,
      value: (e.target.value).trim()
    }
    store.dispatch(action);
  }

  storeChange () {
    this.setState(store.getState());
  }

  addItem(id,name){
    if (name === "") {
      message.error('请输入内容');
      return;
    }
    const action = {
      type: Action.ADD_ITEM,
      id,
      name
    }
    store.dispatch(action);
  }

  deleteItem(index){
    const action = {
      type: Action.DELETE_ITEM,
      index
    };
    store.dispatch(action);
  }

  render(){
    const { inputValue, list }  = this.state;
    return (
      <Fragment>
        <div className="context">
          <Input 
            className="inputWidth" 
            placeholder="Write Something"
            value={inputValue}
            onChange={this.changeInput}
            />
          <Button className="buttonMargin" type="primary" onClick={() => this.addItem(list.length, inputValue)}>增加</Button>
          <List 
            className="listMargin"
            bordered
            dataSource={list}
            renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item.name}</List.Item>)}
          />
          {
            list.length > 0 ? (<div><span>点击每列执行删除功能</span></div>) : null
          }
        </div>
      </Fragment>
    )
  }
}

export default TodoList;