'use strict';
/* eslint-disable */ 
import Vue from "vue";
import vuex from "vuex";
import actions from './actions';

Vue.use(vuex);

const citySN_DO = {
	cip: '',
	cname: '',
	cid: ''
}

const state = {
	citySN: !!window.localStorage.citySN ? JSON.parse(window.localStorage.citySN) : citySN_DO
};

const mutations = {
    updateCitySN(state, payload) {
		Object.assign(state.citySN, payload)
		window.localStorage.setItem('citySN', JSON.stringify(state.citySN))
	},
	updateCitySNForTest(state, payload) {
		Object.assign(state.citySN, payload)
	},
}

const getters = {
	hasIp: (state, getters, rootState) => {
		return !!state.citySN.cip
	},
	fromBJS: (state, getters, rootState) => {
		return state.citySN.cname === '北京市'
	},
}

const modules = {
    
}

export default new vuex.Store({
    state,
    mutations,
    modules,
    actions,
    getters,
})