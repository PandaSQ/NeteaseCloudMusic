<template>
	<div>
		
		<el-row :gutter="20" >
			<div class="title">最新音乐<i class="el-icon-arrow-right"></i></div>
			<br>
			<el-col :span="8" v-for="list in recommendMusic" :key="list.id">
				<el-image
					style="width: 13%;"
					:src="list.picUrl"
					fit="cover">
				</el-image>
				<span class="demonstration">{{ list.name | ellipsis }}
				</span>
			</el-col>
			
		</el-row>
		
		
	</div>
</template>

<script>
	
	import {recommendMusicAPI} from '@/api/index.js'
	
	
	
	export default {
		
		data() {
			return {
				recommendMusic: {}
			}
		},
		
		filters: {
		    ellipsis(value) {
		      if (!value) return "";
		      if (value.length > 20) {
		        return value.slice(0, 20) + "...";
		      }
		      return value;
		    }
		  },
		
		async created(){
			const res = await recommendMusicAPI({limit:12})
			console.log('推荐音乐：',res.data.result);
			this.recommendMusic = res.data.result
			
		}
		
	}
	
</script>

<style scoped>
	
	.el-row {
		padding: 0px 40px;
	}
	
	.el-image {
		border-radius: 10px;
	}
	.demonstration {
		font-size: 15px;
	}
	.title {
		margin-left: 10px;
		font-weight: bold;
		font-size: 20px;
	}
</style>
