<template>
  <nav class="teal">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
      </a>
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

<style lang="scss" local>
  a {
    color: inherit;
    text-decoration: none;

    &.v-link-active {
      text-decoration: underline;
      font-weight: bold;
    }
  }

  nav {
    a + a {
      margin-left: 1em;
    }
  }
</style>