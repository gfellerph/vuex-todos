<template>
  <span v-on:click="toggleTodo" v-bind:class="{toggled:todo.toggled}">{{todo.text}}</span>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      todo: Object
    },
    methods: {
      toggleTodo: function () {
        this.todo.toggled = !this.todo.toggled;
      }
    }
  });
</script>

<style>
  .toggled {
    text-decoration: line-through;
  }
</style>