<template>
	<div>
		footer
	</div>
</template>
<script>
export default {
	data: ()=> ({

	}),
	mounted () {
		console.log('footer mounted')
	},
	beforeCreate () {
		console.log('before footer create')
	},
	created () {
		console.log('footer created')
	}
}
</script>