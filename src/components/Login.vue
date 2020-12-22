<template>
	<div class='login-page-container'>
		<div class='login-container'>
			<form v-on:click.prevent='submit'>
				<label>Username</label>
				<input
					name='username'
					type='text'
					v-model='username'
				>
				<label>Password</label>
				<input
					name='password'
					type='password'
					v-model='password'
				>
				<button type='submit'>Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data: function() {
		return {
			username: '',
			password: ''
		}
	},
	methods: {

	}
}
</script>

<style>
	.login-page-container {
		width: 50%;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-container {
		width: 70%;
		margin: 100px auto;
		box-shadow: 0 2px 6px black;
	}

	.login-container form {
		width: 60%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.login-container label {
		font-size: 28px;
	}

	.login-container input {
		font-size: 28px;
		border-radius: 5px;
	}

	.login-container button {
		width: 40%;
		margin: 20px auto;
	}
</style>