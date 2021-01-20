<template>
	<div>
		<h3>Hi~, this is Loki.js-Page!</h3>
		<el-input v-model="code" @blur="onChangeHandler" v-focus></el-input>
		<el-row>
			<!-- <input v-focus/> -->
		</el-row>
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
	directives: {
		focus: {
			// 指令的定义
			inserted: function (el) {
				let ipt = el.hasChildNodes() ? el.querySelector('input') : el
				ipt.focus()
			}
		}
	},
	methods: {
		async onChangeHandler() {
			this.port = await DBUtils.getPortZhByCode(this.code)
			await DBUtils.getPortNameByOldWays(this.code)

			await DBUtils.getCityZhByCode(this.code)
			await DBUtils.getCityZhByCodeInOldWays(this.code)
		}
	}
}
</script>