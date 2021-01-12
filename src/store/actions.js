/* eslint-disable */ 
const axios = require('axios');
const qs = require('qs');
const header = {
	'Content-Type': 'application/x-www-form-urlencoded'
}
exports.verifyToken = ({state, commit}, payload)=> {
	return new Promise((resolve, reject)=> {
		let url = '/api/uc/eft/verify/token',
			params = {
				token: state.token
			},
			success = (res) => {
				resolve(res)
			}, 
			fail = (err)=> {
				reject(err)
			}
		axios.post(url, qs.stringify(params), {headers: header}).then(success, fail)
	})
}

exports.getIpFromSohu = ({state, commit}, payload)=> {
	return new Promise((resolve, reject)=> {
		axios.get('/api-sh/cityjson?ie=utf-8').then(
			res => {
				let obj = getReturnCitySN(res.data)
				commit('updateCitySN', obj)
				resolve()
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