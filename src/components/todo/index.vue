<template>
  <div>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import Vue from 'vue';
  import addTodo from './add-todo';
  import todoList from './todo-list';
  import firebase from 'src/firebase';
  import store from 'src/store';

  export default Vue.extend({
    data () {
        return {
          todosRef: null
        }
    },
    components: {
      addTodo,
      todoList
    },
    created () {

      // Initialize data connection to firebase todos document
      // and save reference for destroying after use
      this.todosRef = firebase.database().ref('todos');

      // Listen to changes in the app
      this.todosRef.on('child_added', snapshot => {
        store.dispatch('ADD_TODO', {todo: snapshot.val()});
      });

      this.todosRef.on('child_changed', snapshot => {
        store.dispatch('TOGGLE_TODO', {todo: snapshot.val()});
      });

      this.todosRef.on('child_removed', snapshot => {
        store.dispatch('DELETE_TODO', {todo: snapshot.val()});
      });
    },
    beforeDestroy () {
      this.todosRef.off();
      store.dispatch('RESET_TODOS');
    }
  });
</script>
