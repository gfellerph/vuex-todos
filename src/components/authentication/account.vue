<template>
	<div class="account">
		<popup v-if="loggedIn" class="right" anchor="right">
		  <profile-image slot="label" class="account-image"></profile-image>
		  <profile slot="content"></profile>
		</popup>
		<a
			v-link="{path: '/signin'}"
			v-if="!loggedIn"
			class="account-login btn cyan waves-effect waves-light"
		>Sign in</a>
	</div>
</template>

<script>
	import router from 'src/router';
	import User from 'models/User';
	import firebase from 'src/firebase';
	import store from 'src/store';
	import profile from 'components/authentication/profile';
	import profileImage from 'components/authentication/profile-image';
	import popup from 'components/shared/popup';

	export default {
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
	  	popup,
	  	profileImage
	  }
	}
</script>

<style>
	.account-login {
		margin-left: 14px;
	}

	.account-image {
		display: block;
		width: 50px;
		margin: 7px 14px;
	}
</style>