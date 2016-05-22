<template>
  <div>
    <spinner v-if="loading||!loading"></spinner>
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
  import spinner from 'components/shared/spinner';

  export default Vue.extend({
    vuex: {
      getters: {
        loading: state => state.todosLoading
      }
    },
    components: {
      spinner,
      addTodo,
      todoList,
      todoFilter
    }
  });
</script>