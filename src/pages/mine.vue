<template>
	<div>
		<h3>Hi~ This is Mine-Page!</h3>
		<h3>{{citySN}}</h3>
		<p>授权站点列表：</p>
		<ul>
			<li v-if="authBJS">
				<router-link :to="{name: 'BJSPage'}">BJS</router-link>
			</li>
			<li>
				<router-link :to="{name: 'CANPage'}">CAN(测试路由鉴权)</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
/* eslint-disable */
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
	data: ()=> ({

	}),
	computed: {
	    ...mapState({
			citySN: state => state.citySN
	    }),
	    ...mapGetters({
	        authBJS: 'fromBJS',
	    })
	},
}
</script>