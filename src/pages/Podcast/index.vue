<template>
	<div>
		dd
	</div>
</template>

<script>
	
	import {podcastAPI} from '@/api'
	
	export default {
		
		async created(){
			const res = await podcastAPI({limit:4})
			console.log('播客：',res);
		}
		
	}
	
</script>

<style>
</style>
