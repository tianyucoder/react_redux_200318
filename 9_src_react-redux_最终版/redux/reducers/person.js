import {ADD_PERSON} from '../constant'

const inistate = [{id:'001',name:"海峰哥哥",age:18}]

function personReducer (preState=inistate,action){
	const {type,data} = action
	switch (type) {
		case ADD_PERSON:
			return [data,...preState]
		default:
			return preState
	}
}
export default personReducer