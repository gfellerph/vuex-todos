<template>
  <ul class="container">
    <li v-for="todo in todos">
      <todo-item v-bind:todo="todo"></todo-item>
    </li>
  </ul>
</template>

<script>
  import Vue from 'vue';
  import todoItem from './todo-item';

  export default Vue.extend({
    components: {
      todoItem
    },
    vuex: {
      getters: {
        todos: state => {
          return state.todos.filter(todo => todo.toggled === state.activeFilter)
        }
      }
    }
  });
</script>

<style lang="scss" local>
  ul {
    list-style: none;
  }
</style>