<template>
  <div>
    <add-todo></add-todo>
    <todo-filter></todo-filter>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import Vue from 'vue';
  import addTodo from './add-todo';
  import todoList from './todo-list';
  import todoFilter from './todo-filter';

  export default Vue.extend({
    components: {
      addTodo,
      todoList,
      todoFilter
    }
  });
</script>