import React, { Component } from 'react'
import {connect} from 'react-redux'

class Person extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>我是Person组件,上方组件求和为：{this.props.count}</h1>
				<input type="text" placeholder="输入姓名"/>
				<input type="text" placeholder="输入年龄"/>
				<button>添加一个人</button>
				<ul>
					{
						this.props.persons.map((peronObj)=>{
						return <li key={peronObj.id}>姓名：{peronObj.name}，年龄：{peronObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	(state)=>({//映射状态
		count:state.he,
		persons:state.rens
	}),
	{}//映射操作状态的方法
)(Person)
