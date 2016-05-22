<template>
  <div id="vue-app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import navigation from 'components/navigation';
  import store from 'src/store';

  export default {
    components: {
      navigation
    },
    store: store
  }
</script>

<style lang="sass">
  @import 'styles/materialize.config.scss';
  @import 'styles/shared';
</style>
