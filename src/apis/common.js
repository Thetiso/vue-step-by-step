import axios from 'axios'

const getIpFromSohu = ()=> {
	return new Promise((resolve, reject)=> {
		axios.get('/api-sh/cityjson?ie=utf-8').then(
			res => {
				let obj = getReturnCitySN(res.data)
				resolve(obj ? obj.cip : '未知')
			},
			err => {
				console.error(err)
				reject('请求IP出错')
			}
		)
	})
}

const getReturnCitySN = (string) => {
	if(!string) return '';
	var f = '()=>{' + string + 'return returnCitySN;}',
		fn = eval(f),
		returnCitySN = fn()
	return returnCitySN
}


export default {
	getIpFromSohu,
}