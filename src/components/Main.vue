<template>
	<div>
		<Navigation />
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
	name: 'mainview',
	components: {
		Navigation
	}
}
</script>

<style scoped>

</style>