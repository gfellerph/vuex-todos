<template>
	<div class="account">
		<popup v-if="loggedIn" class="right" anchor="right">
			<img
				slot="label"
				class="circle account-image"
				:src="gravatar"
				alt="">
		  <profile slot="content"></profile>
		</popup>
		<a
			v-link="{path: '/signin'}"
			v-if="!loggedIn"
			class="account-login btn green waves-effect waves-light"
		>Login</a>
	</div>
</template>

<script>
	import md5 from 'md5';
	import router from 'src/router';
	import User from 'models/User';
	import firebase from 'src/firebase';
	import store from 'src/store';
	import profile from 'components/authentication/profile';
	import popup from 'components/shared/popup';

	export default {
	  computed: {
	    gravatar () {
	      return 'https://www.gravatar.com/avatar/' + md5(this.user.email);
	    }
	  },
	  created () {

	  	  // Listen to auth changes and dispatch accordingly
	      firebase
	          .auth()
	          .onAuthStateChanged(user => {
	              if (user) {
	                  store.dispatch('LOGIN', {
	                      user: new User(user)
	                  });
	              } else {
	                  store.dispatch('LOGOUT');
	              }
	          });
	  },
	  vuex: {
	    getters: {
	      user: state => state.auth.user,
	      loggedIn: state => state.auth.loggedIn
	    }
	  },
	  components: {
	  	profile,
	  	popup
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