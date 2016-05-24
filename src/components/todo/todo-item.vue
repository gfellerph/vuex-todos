<template>
  <span
    v-on:click="toggleTodo"
    v-bind:class="{toggled:todo.toggled}"
    class="todo-item card-panel"
  >{{todo.text}}</span>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      todo: Object
    },
    vuex: {
      actions: {
        toggleTodo: function ({dispatch}) {
          dispatch('TOGGLE_TODO', {todo: this.todo});
        }
      }
    }
  });
</script>

<style lang="scss">
  .todo-item {
    cursor: pointer;
    display: block;
  }

  .toggled {
    text-decoration: line-through;
  }
</style>