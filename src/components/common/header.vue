<template>
	<div>
		<router-link to="/">首页</router-link>
		<p>header: 全局混入: {{citySN}}</p>
	</div>
</template>
<script>
export default {
	data: ()=> ({

	}),
	mounted () {
		console.log('header mounted')
	},
	beforeCreate () {
		console.log('before header create')
	},
	created () {
		console.log('header created')
	}
}
</script>