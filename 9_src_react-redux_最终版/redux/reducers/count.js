//次文件是定义为Count组件服务的reducer(reducer中最好不要写业务逻辑)
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0
/**
 * countReducer专门用于加工Count组件的状态
 * @param {*} preState 第一次调用传入的是undefined，第二次传入的是之前的状态
 * @param {*} action 动作对象，包含:type、data
 */
function countReducer (preState=initState,action){
	/* 
		若初次调用：
				(1).preState是undefined，action是内置的一个动作，形如：{type: "@@redux/INITf.4.s.p.r.8"}
				(2).给preState赋初始值，返回preState作为初始状态
		若非初调用，preState是之前的状态，action是一个动作，形如：{type:'???',data:???}
				(1).根据action中的type值，决定：要做哪一种操作(加？减？)
				(2).根据action中的data值，决定：加几？减几？
	*/
	//从action中获取type(类型)、data(加几？减几？)
	const {type,data} = action
	//根据stype的类型，决定接下来干什么
	switch (type) {
		case INCREMENT:
			return preState + data
		case DECREMENT:
			return preState - data
		default:
			return preState
	}
}
export default countReducer
