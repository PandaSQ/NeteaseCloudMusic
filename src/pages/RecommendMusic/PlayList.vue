<template>
	
	<el-row :gutter="20" >
		<div class="title">推荐歌单<i class="el-icon-arrow-right"></i></div>
		<el-col :span="25" v-for="list in recommendPlayist" :key="list.id">
			<el-image
				style="width: 90%; height: 90%"
				:src="list.picUrl"
				fit="cover">
			</el-image>
			<p class="demonstration">{{ list.name }}</p>
		</el-col>
		
	</el-row>
	
</template>

<script>
	
	import {recommendPlaylistAPI} from "@/api"
	
	export default {
		data() {
			return {
				recommendPlayist: {}
			}
		},
		async created(){
			const res = await recommendPlaylistAPI({limit:10})
			console.log('推荐歌单',res.data.result);
			this.recommendPlayist = res.data.result
		}
	}
	
</script>

<style scoped="scoped">
	
	.el-row {
		padding: 0px 40px;
	}
	
	/* 设置每个栅格宽度 */
	.el-col-25 { 
		width: 20%;
	}
	.el-image {
		border-radius: 10px;
	}
	.el-col {
		margin: 20px 0px;
	}
	.demonstration {
		height: 9%;
	}
	.title {
		margin-left: 10px;
		font-weight: bold;
		font-size: 20px;
	}
</style>
