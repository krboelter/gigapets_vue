<template>
	<div class='container'>
		<router-link class='nav-title' to='/'>Gigapets</router-link>
		<nav>
			<router-link class="menu-link" to='/'>Home</router-link>
			<router-link class="menu-link" to='/login'>Login</router-link>
			<router-link class="menu-link" to='/'>Home</router-link>
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
	padding: 0 30px;
	height: 70px;
	background-color: slateblue;
}

.container nav {
	width: 30%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.nav-title {
	font-size: 34px;
	text-decoration: none;
	color: white;
}

.menu-link {
	width: 30%;
	padding: 20px 0;
	text-align: center;
	font-size: 22px;
	text-decoration: none;
	color: white;
	transition-duration: 400ms;
	border-radius: 5px;
}

.menu-link:hover {
	background-color: lightgray;
	color: black;
	box-shadow: 0 2px 6px black;
}


</style>