<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
  import todo from 'components/todo';
  import store from './store';

  export default {
    components: {
      todo
    },
    store: store
  }
</script>

<style lang="sass">
  @import '/styles/shared';
</style>
