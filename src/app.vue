<template>
	<div class="example">
		{{ msg }}
		<img src="@assets/images/2.png" alt="">
		<div class="img"></div>
		<div id="nav">
		  <router-link to="/">Home</router-link> |
		  <router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import {getTest} from '@api/common.js'
	import {topics} from '@api/url.js'
	
	export default {
		data() {
			return {
				msg: 'Hello world!'
			}
		},
		mounted() {
			this.fnlist()
		},
		methods: {
			async fnlist() {
				var res = await this.$ajax.get(topics);
				console.log(res)
			}
		}
	}
</script>

<style>
	.example {
		color: red;
	}

	.img {
		width: 200px;
		height: 200px;
		background: url(assets/images/2.png);
		object-fit: cover;
	}
</style>
