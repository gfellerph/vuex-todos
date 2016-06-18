<template>
  <nav class="blue-grey fixed nav">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
        <span class="h3">vuex-todos</span>
      </a>
      <account class="right hide-on-med-and-down"></account>
      <ul class="right hide-on-med-and-down">
        <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
      </ul>
      <div class="side-nav" id="slide-out">
        <p v-if="loggedIn" class="center-align mobile-profile">
          <profile-image></profile-image>
          <profile></profile>
        </p>
        <ul>
          <li v-if="!loggedIn"><a v-link="'/signin'">Sign in</a>
          <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
          <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
        </ul>
      </div>
      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="mdi-navigation-menu material-icons">menu</i>
      </a>
    </div>
  </nav>
</template>

<script>
  import account from 'components/authentication/account';
  import profile from 'components/authentication/profile';
  import profileImage from 'components/authentication/profile-image';

  export default {

    /**
     * Initialize materialize navigation
     * @return {undefined}
     */
    ready () {
      $(".button-collapse").sideNav({
        closeOnClick: true
      });
    },
    vuex: {
      getters: {
        loggedIn: state => state.auth.loggedIn
      }
    },
    components: {
      account,
      profile,
      profileImage
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
      z-index: 1000; // More than materialize nav open overlay
    }

    a + a {
      margin-left: 1em;
    }
    
    .brand-logo {
      display: flex;
      align-items: center;

      i {
        margin-right: 20px;
      }
    }
  }


  .mobile-profile {
    background: url(~src/assets/back.jpg);
    background-size: cover;
    margin: 0;
    padding: 20px;
  }
</style>