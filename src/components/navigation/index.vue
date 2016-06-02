<template>
  <nav class="teal fixed nav">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
      </a>
      <popup class="right" anchor="right">
        <account slot="label"></account>
        <component slot="content" :is="currentView"></component>
      </popup>
      <ul class="right hide-on-med-and-down">
        <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
      </ul>
      <ul class="side-nav">
        <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
      </ul><a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
  import account from 'components/authentication/account';
  import signin from 'components/authentication/signin';
  import profile from 'components/authentication/profile';
  import popup from 'components/shared/popup';

  export default {
    computed: {
      currentView () {
        return this.loggedIn ? 'profile' : 'signin';
      }
    },
    vuex: {
      getters: {
        loggedIn: (state) => state.auth.loggedIn
      }
    },
    components: {
      account,
      popup,
      signin,
      profile
    }
  }
</script>

<style lang="scss">
  a {
    color: inherit;
    text-decoration: none;
  }

  nav {
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }

    a + a {
      margin-left: 1em;
    }
  }
</style>