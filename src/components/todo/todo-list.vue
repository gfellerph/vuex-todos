<template>
  <ul>
    <li v-for="todo in todos | filterBy activeFilter in 'toggled'">
      <todo-item v-bind:todo="todo"></todo-item>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import todoItem from './todo-item';

  export default Vue.extend({
    props: {
      todos: Array,
      activeFilter: null
    },
    components: {
      todoItem
    }
  });
</script>

<style lang="less">
  li {
    
    span {
      padding: 5px 15px;
      display: block;
      cursor: pointer;
    }
  }
</style>