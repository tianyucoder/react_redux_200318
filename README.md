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
