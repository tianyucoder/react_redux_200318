//该文件是定义redux中最和的管理者——store

//引入createStore,用于创建redux中最核心的对象————store
import {createStore,applyMiddleware} from 'redux'
//引入thunk,用于支持异步action
import thunk from 'redux-thunk'
//引入composeWithDevTools用于支持浏览器redux调试工具的使用
import {composeWithDevTools} from 'redux-devtools-extension'
//引入汇总完的reducer
import reducer from './reducers'

//#region
/* 调用createStore(xxxxReducer)可以生成一个store对象
举例说明：老板在创业之初，就找好了合伙人
applyMiddleware的作用是让store认可异步action的写法
allReducer是将所有的reducer汇总之后的reducer————借助xxx汇总 */
//#endregion
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

//暴露store对象
export default store