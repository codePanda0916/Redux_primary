import * as Action from './actionTypes';

// 方法(纯函数)
export default (state = {}, action) => {
  if (action.type === Action.CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
    newState.inputValue  = action.value;
    return newState;
  }

  if (action.type === Action.ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push({id: action.id, name: action.name});
    newState.inputValue = "";
    return newState;
  }

  if (action.type === Action.DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  if(action.type === Action.GET_DATA){
    let newState = JSON.parse(JSON.stringify(state));
    newState = action.data;
    return newState;
  }
  return state
}