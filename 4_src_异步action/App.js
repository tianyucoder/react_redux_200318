import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {
	render() {
		const {store} = this.props
		return (
			<div>
				<Count store={store}/>
			</div>
		)
	}
}
