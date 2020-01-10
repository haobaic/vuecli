<template>
	<div class="example">
		<div class="nav">
		  <router-link to="/">Home</router-link> |
		  <router-link to="/about">About</router-link>
		</div>
		<img src="@assets/images/2.png" alt="">
		<div class="img"></div>
		<el-button>el-button</el-button>
		<router-view/>
	</div>
</template>

<script>
	import {getTest} from '@api/common.js'
	import {topics} from '@api/url.js'
	export default {
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

<style  lang="less">
	.example {
		color: red;
		/* display: flex; */
		/* justify-content: center; */
		text-align: center;
	}
    .nav {
      a {
        font-weight: bold;
        color: #2c3e50;
        font-size: 30px;
        &.router-link-exact-active {
          color:#e82955;
        }
      }
    }
	.img {
		width: 200px;
		height: 200px;
		background: url(assets/images/2.png) no-repeat;
		background-size: cover;
		margin: 0 auto;
	}
</style>