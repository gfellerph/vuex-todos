<template>
	<div class="account">
		<a href="#">
			<img
				v-if="loggedIn"
				class="circle account-image"
				:src="gravatar"
				alt="">
		</a>
		<a
			v-link="{path: '/signin'}"
			v-if="!loggedIn"
			class="account-login btn pink waves-effect waves-light"
			@click="login"
		>Login</a>
	</div>
</template>

<script>
	import md5 from 'md5';
	import router from 'src/router';

	export default {
	  computed: {
	    gravatar () {
	      return 'https://www.gravatar.com/avatar/' + this.md5email;
	    }
	  },
	  methods: {
	  	login: () => {
	  		router.go('/signin');
	  	}
	  },
	  vuex: {
	    getters: {
	      md5email: state => md5(state.auth.user.email),
	      loggedIn: state => state.auth.loggedIn
	    }
	  }
	}
</script>

<style>
	.account-image {
		display: block;
		width: 50px;
		margin: 7px 14px;
	}

	.account-login {
		margin-left: 14px;
	}
</style>