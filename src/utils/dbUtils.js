import LOKIJS from 'lokijs';
import axios from 'axios';

const DB =  new LOKIJS('yc@2021.01.13.v1', {persistenceMethod:'localStorage'});

const initDB = async function() {
	DB.loadDatabase()
	if (!DB.getCollection("airports")) {
		await initPortTable()
	}
}

const portDB = async function() {
	await initDB()
	return DB.getCollection('airports')
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

const DBUtils = {
	initDB: initDB,
	getPortZhByCode: getPortZhByCode,
	getPortNameByOldWays: getPortNameByOldWays
}

export default DBUtils