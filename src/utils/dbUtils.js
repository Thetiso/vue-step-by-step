import LOKIJS from 'lokijs';
import axios from 'axios';

window.localStorage.removeItem('yc@2021.01.13.v1')
const DB =  new LOKIJS('yc@2021.01.20.v1', {persistenceMethod:'localStorage'});

const initDB = async function() {
	DB.loadDatabase()
	if (!DB.getCollection("airports")) {
		await initPortTable()
	}
	if (!DB.getCollection('citys')) {
		await initCityTable()
	}
}

const portDB = async function() {
	await initDB()
	return DB.getCollection('airports')
}
const cityDB = async function() {
	await initDB()
	return DB.getCollection('citys')
}


const initPortTable = async function() {
	var airports = DB.addCollection('airports', ['cc', 'cn', 'pn', 'pc'], true, false);
	DB.listCollections();
	let {data} = await axios.get('/oss/yc/static/json-v2/saas_ports.json?t=' + new Date().getTime())
	for(let c of data) {
		airports.insert(c)
	}
	DB.save();
	console.log('port db finished')
}

const initCityTable = async function() {
	var citys = DB.addCollection('citys', ['cc', 'cn', 'ctn'], true, false);
	DB.listCollections();
	let {data} = await axios.get('/oss/yc/static/json-v2/saas_citys.json?t=' + new Date().getTime())
	for(let c of data) {
		citys.insert(c)
	}
	DB.save();
	console.log('city db finished')
}

const getCityZhByCode = async function(query) {
	var CITYDB = await cityDB()
	var patt = '^' + query ; 
	var reg = new RegExp(patt, "");
	let st = new Date().getTime()
	var result= CITYDB.where(function(obj) {
		return reg.test(obj.cc)
	});
	for(let item of result) {
		console.log('[city] loki: ', new Date().getTime() - st)
		return item.cn
	}
}

const getPortZhByCode = async function(query) {
	var PORTDB = await portDB()
	var patt = '^' + query ; 
	var reg = new RegExp(patt, "");
	let st = new Date().getTime()
	var result= PORTDB.where(function(obj) {
		return reg.test(obj.pc)
	});
	for(let item of result) {
		console.log('loki: ', new Date().getTime() - st)
		return item.pn
	}
	
}

const getPortNameByOldWays = async function(code) {
	let {data} = await axios.get('/oss/yc/static/json-v2/saas_ports.json?t=' + new Date().getTime())
	let res = '', st = new Date().getTime()
	for(let c of data) {
		if(c.pc == code) {
			res = c.pn
			break;
		}
	}
	console.log('let of: ', new Date().getTime() - st, res)
	st = new Date().getTime()
	res = ''
	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		if(element.pc == code) {
			res = element.pn
			break
		}	
	}
	console.log('for loop: ', new Date().getTime() - st, res)

}

const getCityZhByCodeInOldWays = async function(code) {
	let {data} = await axios.get('/oss/yc/static/json-v2/saas_citys.json?t=' + new Date().getTime())
	let res = '', st = new Date().getTime()
	for(let c of data) {
		if(c.cc == code) {
			res = c.cn
			break;
		}
	}
	console.log('[city] let of: ', new Date().getTime() - st, res, data.length)
	st = new Date().getTime()
	res = ''
	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		if(element.cc == code) {
			res = element.cn
			break
		}	
	}
	console.log('[city] for loop: ', new Date().getTime() - st, res, data.length)
}

const DBUtils = {
	initDB: initDB,
	getPortZhByCode: getPortZhByCode,
	getPortNameByOldWays: getPortNameByOldWays,
	getCityZhByCode: getCityZhByCode,
	getCityZhByCodeInOldWays,
}

export default DBUtils