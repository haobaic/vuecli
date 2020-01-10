<template>
	<div class="home">
		<p>我是Home  </p>
		<v-word></v-word>
	</div>
</template>

<script>
	import Word from '@/components/word.vue'
	export default {
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
