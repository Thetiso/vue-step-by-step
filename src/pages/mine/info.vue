<template>
	<div style="padding-top: 50px;">
		<div>
			<router-link to>
				<el-button @click="$router.back(-1)">返回个人中心页面</el-button>
			</router-link>
		</div>
		<div>
			<textarea></textarea>
		</div>
		<div>
			<el-button @click="addTodo" type='primary'>Vue-Bus</el-button>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		addTodo() {
			this.$bus.emit('add-todo', new Date().getTime())
		}
	}
}
</script>