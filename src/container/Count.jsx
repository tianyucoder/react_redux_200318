/* 
	该组件为Count的容器组件：
		1.随意的使用任何redux相关的api
		2.通过props给其UI组件(子组件)传递：一些标签属性 a=1 b=2 c=()=>{}
		3.特别注意：容器组件不能靠程序员自己去定义，要靠一个特殊的API去定义
*/

//引入Count的UI组件，用于展示页面
import CountUI from '../components/Count'
//引入connect，用于连接
import {connect} from 'react-redux'

function mapStateToProps (state){
	//由于props接收到的参数，都会收集成对象，所以demo1必须返回一个对象
	return {count:state} //return的这个对象，最终会整合到UI组件的this.props对象
}

//暴露connect()()生成的容器组件
export default connect(mapStateToProps)(CountUI)


/* 
		关于connect你要知道的：
					1.用法: const 容器组件 = connect()(UI组件)
*/







