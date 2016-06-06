<template>
  <div class="container">
    <div class="card-panel">
      <div class="row">
        <div class="input-field col s12">
          <input
            id="add_todo"
            type="text"
            v-model="newTodo"
            class="validate"
            @keyup.enter="addTodo"
          >
          <label for="add_todo">add todo</label>
          <errors :errors="err"></errors>
        </div>
      </div>
      <div class="flex align-center space-between">
        <todo-filter></todo-filter>
        <button
          class="green btn right-align"
          @click="addTodo"
          :disabled="disableAddTodo"
        >add</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import firebase from 'src/firebase';
  import Todo from 'models/Todo';
  import errors from 'components/errors/errors';
  import todoFilter from 'components/todo/todo-filter';

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
      todoFilter
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