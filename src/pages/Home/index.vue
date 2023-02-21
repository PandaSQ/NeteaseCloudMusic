<template>
	<div style="height: 100vh;">
		
		<el-container>
			
			<!-- 头部导航 -->
			<el-header height='9vh'>
				<Home></Home>
			</el-header>
		  
		  <el-container>
			  <!-- 侧边栏 -->
		    <Aside></Aside>
			
			<!-- 主体 -->
			<el-main>
				<router-view></router-view>
			</el-main>
			
		  </el-container>
		  
			  <!-- 页脚 -->
				<Foot></Foot>
		  
		</el-container>
		
	</div>
</template>

<script>
	
	import Home from './Home.vue'
	import Aside from './Aside.vue'
	import Foot from './Foot.vue'
	
	
	export default {
		components:{Aside,Home,Foot},
		
	}
</script>

<style scoped="scoped">
	.el-header {
		background-color: #EC4141;
		line-height: 9vh;
	}
	.el-main {
		height: 78vh;
	}
	
	
</style>
