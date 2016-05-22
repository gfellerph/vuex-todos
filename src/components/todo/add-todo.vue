<template>
  <p>
    <input type="text" v-model="newTodo">
    <button
      v-on:click="addTodo"
      v-bind:disabled="disableAddTodo"
    >add</button>
    <errors :errors="err"></errors>
  </p>
</template>

<script>
  import Vue from 'vue';
  import store from 'src/store';
  import firebase from 'src/firebase';
  import Todo from 'models/Todo';
  import errors from 'components/errors/errors';

  export default Vue.extend({
    data: function () {
      return {
        newTodo: '',
        err: []
      }
    },
    computed: {
      disableAddTodo: function () {
        return this.newTodo.length == 0;
      }
    },
    methods: {
      addTodo: function () {
        const newTodo = new Todo(this.newTodo);
        firebase
          .database()
          .ref('todos/' + newTodo.id)
          .set(newTodo)
          .catch(err => {
            // Write failed, print error
            this.err.push(err.message);
          });
        this.newTodo = '';
      }
    },
    components: {
      errors
    }
  });
</script>

<style lang="less">
  input[type="text"] {
    border: none;
    background: none;
    outline: none;
    font-size: inherit;
    
    border-bottom: 1px solid black;
  }

  button {
    background: black;
    color: white;
    border: none;
    padding: 3px 15px;
    transition: background 150ms;
    font-size: inherit;

    &[disabled] {
      background: rgb(200,200,200);
    }
  }
</style>