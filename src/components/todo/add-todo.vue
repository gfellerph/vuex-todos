<template>
  <div class="container">
    <div class="input-field card-panel">
      <input id="add_todo" type="text" v-model="newTodo" class="validate">
      <label for="add_todo">add todo</label>
      <p class="right-align">
        <waves :color="'white'">
          <button
            class="teal btn right-align"
            v-on:click="addTodo"
            v-bind:disabled="disableAddTodo"
          >add</button>
        </waves>
      </p>
      <errors :errors="err"></errors>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'src/firebase';
  import Todo from 'models/Todo';
  import errors from 'components/errors/errors';
  import waves from 'vue-materialize/waves';

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
      errors,
      waves
    }
  });
</script>

<style lang="less">
  button {
    &[disabled] {
      background: rgb(200,200,200) !important;
    }
  }
</style>