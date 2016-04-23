<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
  import todo from 'components/todo';

  export default {
    components: {
      todo
    }
  }
</script>

<style>
  body {
    display: flex;
    justify-content: center;
    font-family: 'roboto';
    font-size: 18px;
  }
</style>
