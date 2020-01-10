<template>
	<div class="home">
		<p>我是Home  </p>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<v-word></v-word>
	</div>
</template>

<script>
	import Word from '@/components/word.vue'
	export default {
		  data() {
		    return {
		      input: ''
		    }
		  },
		components: {
			"v-word":Word
		},
	}
</script>

<style scoped>
	.home{
		font-size: 50px;
		color: #fff;
	}
</style>
