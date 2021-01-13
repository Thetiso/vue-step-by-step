<template>
	<div>
		<h3>Hi~, this is Loki.js-Page!</h3>
		<el-input v-model="code" @blur="onChangeHandler"></el-input>
		<el-row>查询结果：{{port}}</el-row>
	</div>
</template>
<script>
import DBUtils from '@/utils/dbUtils.js';
export default {
	data: ()=> ({
		code: '',
		port: null,
	}),
	mounted() {
	},
	methods: {
		async onChangeHandler() {
			this.port = await DBUtils.getPortZhByCode(this.code)
			await DBUtils.getPortNameByOldWays(this.code)
		}
	}
}
</script>