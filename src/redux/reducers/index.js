//该文件用于汇总所有的reducer，最终暴露出去一个总的reducer

//引入combineReducers用于汇总reducer
import {combineReducers} from 'redux'
//引入countReducer，用于加工Count组件的状态
import countReducer from './count'
//引入personReducer，用于加工Person组件的状态
import personReducer from './person'

//combineReducers所传入的那个对象，就是redux中的总状态对象！！！！！
export default combineReducers({
	count:countReducer,
	persons:personReducer
}) 