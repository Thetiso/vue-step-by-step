<template>
	<div>
		header
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