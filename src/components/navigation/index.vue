<template>
  <nav class="teal fixed">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
      </a>
      <account class="right"></account>
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

  export default {
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
      z-index: 2;
    }

    a + a {
      margin-left: 1em;
    }
  }
</style>