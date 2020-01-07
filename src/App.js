import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import store from './store/index';
import 'antd/dist/antd.css';
import './App.css';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';

class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e){
    const action = {
      type: CHANGE_INPUT,
      value: (e.target.value).trim()
    }
    store.dispatch(action)
  }

  addItem(){
    if (this.state.inputValue !== '') {
      const action = {
        type: ADD_ITEM
      }
      store.dispatch(action);
    }
  }

  deleteItem (index) {
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action);
  }

  storeChange(){
    this.setState(store.getState())
  }

  render(){
    return (
      <div className="context">
        <Input 
          className="inputWidth"
          placeholder={this.state.placeholder}
          value={this.state.inputValue}
          onChange={this.changeInputValue}
        />
        <Button 
          className="buttonMargin" 
          type="primary"
          onClick={this.addItem}
        >增加项目</Button>
        <div className="listMargin">
          <List 
            bordered
            dataSource={this.state.list}
            renderItem={
              (item, index) => (<List.Item onClick={() => {this.deleteItem(index)}}>{item}</List.Item>)
            }
          />
        </div>
      </div>
    )
  }
}

export default App;
