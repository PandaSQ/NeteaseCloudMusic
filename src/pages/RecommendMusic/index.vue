<template>
	  <div>
		  
		<Rotation></Rotation>
		
		<PlayList></PlayList>
		  
		<Music></Music>
		
	
	</div>
</template>
  



<script>
	
	import PlayList from './PlayList.vue'
	import Rotation from './Rotation.vue'
	import Music from './Music.vue'
	import Podcast from '../Podcast/index.vue'
	
	export default {
		name:'Recommendmusic',
		components:{PlayList,Rotation,Music,Podcast}
	}
	
</script>

<style>
	
</style>
