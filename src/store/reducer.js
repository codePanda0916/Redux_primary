import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';

const defaultState = {
  inputValue: 'Write Something',
  placeholder: 'Write Something',
  list: [
    '早上去上班',
    '中午去午休',
    '下午就下班'
  ]
}; // 默认数据
// 方法函数
export default (state = defaultState, action) => {
  console.log(action)
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
    newState.inputValue  = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  return state
}