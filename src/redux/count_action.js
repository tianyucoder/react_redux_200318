//该文件是定义为Count组件服务器的actionCreator，专门用于创建和Count组件相关的action对象

import {INCREMENT,DECREMENT} from './constant'
//创建加的action
export const incrementAction = number => ({type:INCREMENT,data:number})
//创建减的action
export const decrementAction = number => ({type:DECREMENT,data:number})