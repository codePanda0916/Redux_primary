# Redux-基础练习

### clone项目后执行如下可查看页面
```javascript
npm/cnpm install // 安装依赖
npm start
```

### 项目中使用的相关API
```javascript
// 获取初始化数据
store.getState()
// 更新state
store.dispatch(action)
// 注册监听器
store.subscribe(listener)
```
主要依赖
```javascript
import React, { Fragment } from 'react';
import { createStore } from 'redux';
```
通过console.log打印一下store，如下：
```javascript
dispatch: ƒ dispatch(action)
subscribe: ƒ subscribe(listener)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
Symbol(observable): ƒ observable()
```


### mock接口使用fastmock
https://www.fastmock.site/