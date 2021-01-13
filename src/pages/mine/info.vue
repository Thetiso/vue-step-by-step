<template>
	<div style="padding-top: 50px;">
		<div>
			<router-link to>
				<button @click="$router.back(-1)">返回个人中心页面</button>
			</router-link>
		</div>
		<div>
			<textarea></textarea>
		</div>
		<div>
			<button @click="addTodo">Vue-Bus</button>
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