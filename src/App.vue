<template>
  <div id="vue-app">
    <navigation></navigation>
    <div class="content">
      <router-view></router-view>
    </div>
    <credits></credits>
  </div>
</template>

<script>
  import navigation from 'components/navigation';
  import credits from 'components/shared/credits';
  import store from 'src/store';

  export default {
    components: {
      navigation,
      credits
    },
    store: store
  }
</script>

<style lang="scss">
  @import 'styles/index';

  #vue-app {
    overflow: hidden;
  }
</style>