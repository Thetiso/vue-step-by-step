<template>
	<div class="hello">
		<h3>这是首页, {{msg}}</h3>
		<p>ip: {{ip}}</p>
		<router-link :to="{name: 'MinePage'}">
			<el-button>个人中心</el-button>
		</router-link>
		<router-link :to="{name: 'LokiPage'}">
			<el-button>本地数据中心</el-button>
		</router-link>
	</div>
</template>

<script>
/* eslint-disable */
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
	async created() {
		console.log('CREATED')
		await new Promise((resolve, reject)=> {
			setTimeout(()=> {
				console.log('CREATED AFTER 10S')
				resolve()
			}, 10000)
		})
	},
	mounted () {
		let success = res=> {
			console.log(res)
			this.ip = res
		},	fail = err=> {
			console.error(err)
		}
		console.log('MOUNTED');
		// COMMON_APIS.getIpFromSohu().then(success, fail)
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
