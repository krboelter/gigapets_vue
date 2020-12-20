<template>
	<div class="container">
		<router-link class="nav-title" to="/">Gigapets</router-link>
		<nav>
			<router-link class="menu-link" to="/">Home</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
	background-color: slateblue;
}

.container nav {
	width: 30%;
}

.nav-title {
	font-size: 34px;
	text-decoration: none;
	color: white;
}

.menu-link {
	font-size: 22px;
	text-decoration: none;
	color: white;
}

.menu-link:hover {
	background-color: coral;
	box-shadow: 0 2px 4px black;
}


</style>