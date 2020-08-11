//次文件是定义为Count组件服务的reducer

const initState = 0
/**
 * countReducer专门用于加工Count组件的状态
 * @param {*} preState 第一次调用传入的是undefined，第二次传入的是之前的状态
 * @param {*} action 动作对象，包含:type、data
 */
function countReducer (preState=initState,action){
	/* 
		若是初次调用：
				(1).preState是undefined，action是内置的一个动作
				(2).给preState赋初始值，返回preState作为初始状态
		若非初次代用，preState是之前的状态，action是一个动作
				(1).根据action中的type值，决定：要做哪一种操作(加？减？)
				(2).根据action中的data值，决定：加几？减几？
	*/
	//从action中获取type(类型)、data(加几？减几？)
	const {type,data} = action
	//根据stype的类型，决定接下来干什么
	switch (type) {
		case 'increment':
			return preState + data
		case 'decrement':
			return preState - data
		default:
			return preState
	}
}