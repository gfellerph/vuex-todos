<template>
	<img
		class="circle"
		:src="gravatar"
		alt="">
</template>

<script>
	import md5 from 'md5';

	export default {
	  computed: {
	    gravatar () {
	      return 'https://www.gravatar.com/avatar/' + md5(this.user.email);
	    }
	  },
	  vuex: {
	    getters: {
	      user: state => state.auth.user
	    }
	  }
	}
</script>