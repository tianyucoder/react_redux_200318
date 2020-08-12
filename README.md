## 1.如何使用脚手架
			(1).清空public与src里的东西
			(2).建立文件：
						(1).public/index.html (备注要写一个root节点,例如：<div id="root"></div>)
						(2).src/App.js  ————————“外壳”组件
						(3).src/index.js ———————— 入口文件
						
## 2.求和案例——纯react版本
			(1).编码：components/Count.jsx
			(2).写好四个方法：加、减、奇数加、延迟加

## 3.求和案例——redux迷你版
			(1).安装redux：yarn add redux。
			(2).找到Count组件，在自身状态中删除count属性，同时删除所有用到自身count的地方。
			(3).建立文件夹与文件：
						-src
							-redux
								-store.js
								-count_reducer.js
			(4).编写count_reducer.js,具体代码请参考文件
			(5).编写store.js，注意：store要靠createStore创建，createStore调用时要传入reducer
			(6).Count组件中，引入store，用于读取、更新redux中的状态
						1).读：store.getState()
						2).写：store.dispatch({type:?????,data:??????})
			(7).去index.js中检测redux的变化，若变化，重新渲染App

## 4.求和案例——redux完整版
			(1).创建文件：src/redux/constant.js ——————配置action中type的常量
			(2).创建文件：src/redux/count_action.js ——————用于创建Count组件相关的action对象
			(3).在count_reducer.js 和 Count.jsx 里使用常量
			(4).在Count.jsx中使用第二步创建的actionCreator

## 5.异步action的使用
			(1).安装依赖包：yarn add redux-thunk
			(2).修改store.js
						import {createStore,applyMiddleware} from 'redux'
						import thunk from 'redux-thunk'
						const store = createStore(countReducer,applyMiddleware(thunk))
		  (3).创建异步action
						//创建【等一等】再加的action
						export const incrementWaitAction = number => {
							return (dispatch) => {
								//这里我们用一个setTimeout模拟了一个异步代码，以后就是真实的ajax请求了
								setTimeout(()=>{
									//调用同步action——incrementAction实现加
									dispatch(incrementAction(number))
								},500)
							}
						}

## 6.对react-redux的理解
		(1).划分组件的依据：
						站在路由的角度：
									(1).一般组件
									(2).路由组件
						站在react-redux的角度：
									(1).UI组件：组件中不允许使用任何redux相关的API————只负责展示界面
									(2).容器组件：组件中可以随意的使用任何redux相关的API————只负责与redux交互

## 7.react-redux的使用方式
			(1).把原来的Count组件，删成UI组件
			(2).创建容器组件：src/container/Count.jsx，代码如下：
						import CountUI from '../components/Count'
						import {connect} from 'react-redux'
						export default connect(mapStateToProps)(CountUI)
			
