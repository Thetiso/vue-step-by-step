<template>
	<div>
		<Header />
		<Content />
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Content from '@/components/common/content';

export default {
	components: {
		Header,
		Content,
		Footer,
	},
	data: ()=> ({

	}),
	mounted () {
			console.log('layout mounted')
	},
	beforeCreate () {
		console.log('before layout create')
	},
	created () {
		console.log('layout created')
	}
}
</script>