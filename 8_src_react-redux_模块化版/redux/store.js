//该文件是定义redux中最和的管理者——store

//引入createStore,用于创建redux中最核心的对象————store
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入countReducer，用于加工Count组件的状态
import countReducer from './reducers/count'
//引入personReducer，用于加工Person组件的状态
import personReducer from './reducers/person'
//引入thunk,用于支持异步action
import thunk from 'redux-thunk'

//combineReducers所传入的那个对象，就是redux中的总状态对象！！！！！
const allReducer = combineReducers({
	he:countReducer,
	rens:personReducer
}) 

//调用createStore(xxxxReducer)可以生成一个store对象
//举例说明：老板在创业之初，就找好了合伙人
//applyMiddleware的作用是让store认可异步action的写法
//allReducer是将所有的reducer汇总之后的reducer————借助xxx汇总
const store = createStore(allReducer,applyMiddleware(thunk))

//暴露store对象
export default store