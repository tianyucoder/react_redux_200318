import React, { Component } from 'react'
import {Input,Button,message} from 'antd'
import './App.less'

export default class App extends Component {
	show = ()=>{
		// alert('我是一些信息')
		message.success('我是成功的消息')
		message.warning('我是警告的消息')
		message.error('我是严重的消息')
	}
	render() {
		return (
			<div>
				<Input style={{width:'200px'}} type="text" placeholder="请输入数据"/>
				<Button >点我</Button>
				<Button type="primary">点我</Button>
				<Button type="danger" onClick={this.show}>点我提示</Button>
				<div className="demo"></div>
			</div>
		)
	}
}
