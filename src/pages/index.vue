<template>
	<div class="hello">
		<h3>这是首页, {{msg}}</h3>
		<p>ip: {{ip}}</p>
	</div>
</template>

<script>
import COMMON_APIS from '@/apis/common'
export default {
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: 'hello world'
		}
	},
	data: ()=> ({
		ip: ''
	}),
	mounted () {
		let success = res=> {
			console.log(res)
			this.ip = res
		},	fail = err=> {
			console.error(err)
		}
		COMMON_APIS.getIpFromSohu().then(success, fail)
	}
}
</script>
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
