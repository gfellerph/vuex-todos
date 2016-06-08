<template>
  <nav class="brown fixed nav">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
      </a>
      <account class="right"></account>
      <ul class="right hide-on-med-and-down">
        <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
      </ul>
      <ul id="slide-out" class="side-nav">
        <li v-link-active><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li v-link-active><a v-link="{path: '/todo'}">Todo</a></li>
      </ul>
      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="mdi-navigation-menu material-icons">menu</i>
      </a>
    </div>
  </nav>
</template>

<script>
  import account from 'components/authentication/account';

  export default {

    /**
     * Initialize materialize navigation
     * @return {undefined}
     */
    ready () {
      $(".button-collapse").sideNav();
    },
    components: {
      account
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
  }
</style>