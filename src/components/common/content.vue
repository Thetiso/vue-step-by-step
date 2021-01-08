<template>
	<router-view />
</template>
<script>
export default {
	data: ()=> ({

	}),
	mounted () {
		console.log('content mounted')
	},
	beforeCreate () {
		console.log('before content create')
	},
	created () {
		console.log('content created')
	}
}
</script>