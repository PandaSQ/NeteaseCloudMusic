<template>
	<div>
		
		 <el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="item in recommendMusic" :key="item.id">
				<el-image
					style="height: 100%;width: 100%;border-radius: 20px;"
					:src="item.imageUrl"
					fit="cover">
				</el-image>
			</el-carousel-item>
		  </el-carousel>
		
		
	</div>
</template>

<script>
	
	import {rotationAPI} from '@/api/index.js'
	
	
	
	export default {
		
		data() {
			return {
				recommendMusic: {}
			}
		},
		async created(){
			const res = await rotationAPI()
			console.log('轮播图：',res.data.banners);
			this.recommendMusic = res.data.banners
		}
		
	}
	
</script>

<style>
	.el-carousel {
		margin: 0px 40px;
	}
</style>
