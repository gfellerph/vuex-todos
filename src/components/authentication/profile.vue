<template>
	<div class="profile grey-text text-darken-4">
   <h2>{{user.email}}</h2>
   <p class="grey-text text-lighten-2">{{user.uid}}</p>
   <p class="right-align">
     <button
      class="pink waves-effect btn"
      @click="signout"
     >sign out</button>
   </p>
  </div>
</template>

<script>
  import firebase from 'src/firebase';

  export default {
    methods: {
      signout: () => {
        firebase
          .auth()
          .signOut();
      }
    },
    vuex: {
      getters: {
        user: state => state.auth.user
      }
    }
  }
</script>

<style>
  .profile {
    padding: 0 2rem;
  }
</style>