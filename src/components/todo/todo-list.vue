<template>
  <ul class="container">
    <li v-for="todo in todos">
      <todo-item v-bind:todo="todo"></todo-item>
    </li>
  </ul>
</template>

<script>
  import todoItem from './todo-item';

  export default {
    components: {
      todoItem
    },
    vuex: {
      getters: {
        todos: state => {
          const {todos, activeFilter} = state.todo;
          return todos.filter(todo => todo.toggled === activeFilter)
        }
      }
    }
  };
</script>

<style lang="scss" local>
  ul {
    list-style: none;
  }
</style>