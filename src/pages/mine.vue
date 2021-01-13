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
		<router-link :to="{name:'MineInfoPage'}">测试keepAlive</router-link>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>
/* eslint-disable */
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
	data: ()=> ({
		todos: []
	}),
	computed: {
	    ...mapState({
			citySN: state => state.citySN
	    }),
	    ...mapGetters({
	        authBJS: 'fromBJS',
	    })
	},
	created() {
		this.$bus.on('add-todo', this.addTodo);
		this.$bus.once('once', () => console.log('This listener will only fire once'));
	},
	beforeDestroy() {
		this.$bus.off('add-todo', this.addTodo);
	},
	methods: {
		addTodo(newTodo) {
			this.todos.push(newTodo);
		}
	}
}
</script>