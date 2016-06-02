<template>
  <div id="vue-app">
    <navigation></navigation>
    <div class="content">
      <router-view></router-view>
    </div>
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

<style lang="scss">
  @import 'styles/index';
</style>