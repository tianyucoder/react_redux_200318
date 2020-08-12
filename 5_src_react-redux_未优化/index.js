//引入React核心库
import React from 'react'
//引入react-dom
import ReactDOM from 'react-dom'
//引入store
import store from './redux/store'
//引入App
import App from './App'

ReactDOM.render(<App store={store}/>,document.getElementById('root'))

//store.subscribe专门用于检测redux中状态的变化，一旦状态变化，就调用subscribe所指定的回调
store.subscribe(()=>{
	ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})