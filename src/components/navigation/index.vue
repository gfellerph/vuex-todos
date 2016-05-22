<template>
  <nav class="teal">
    <div class="nav-wrapper container">
      <a v-link="{path: '/', exact: true}" class="brand-logo">
        <i class="material-icons">done_all</i>
        <span>vuex</span>
      </a>
      <ul class="right hide-on-med-and-down">
        <li><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li><a v-link="{path: '/todo'}">Todo</a></li>
      </ul>
      <ul class="side-nav">
        <li><a v-link="{path: '/', exact: true}">Sparta</a></li>
        <li><a v-link="{path: '/todo'}">Todo</a></li>
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

  .brand-logo {
    .material-icons {
      display: inline-block;
    }

    span {
      position: absolute;
      line-height: 64px;
      height: 64px;
      margin-left: 1em;
    }
  }

  nav {
    a + a {
      margin-left: 1em;
    }
  }
</style>