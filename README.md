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
			(4).