<template>
	<div>
		<el-aside width="200px">
			<el-menu>
				<el-menu-item-group>
					<el-menu-item>发现音乐</el-menu-item>
					<el-menu-item>视频</el-menu-item>
					<el-menu-item>关注</el-menu-item>
					<el-menu-item>直播</el-menu-item>
					<el-menu-item>私人FM</el-menu-item>
				</el-menu-item-group>
			</el-menu>
		</el-aside>
	</div>
</template>

<script>
	
	export default {
		name:'Aside',
	}
	
</script>

<style scoped="scoped">
	
	.el-menu-item {
		height: 40px;
		line-height: 40px;
	}
	
</style>
