<template>
  <div>
    <todo-filter></todo-filter>
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import Vue from 'vue';
  import addTodo from './add-todo';
  import todoList from './todo-list';
  import todoFilter from './todo-filter';
  import spinner from 'components/shared/spinner';
  import firebase from 'src/firebase';
  import store from 'src/store';

  export default Vue.extend({
    data () {
        return {
          todosRef: null
        }
    },
    components: {
      spinner,
      addTodo,
      todoList,
      todoFilter
    },
    created () {

      // Initialize data connection to firebase todos document
      // and save reference for destroying after use
      this.todosRef = firebase.database().ref('todos');

      // Listen to changes in the app
      this.todosRef.on('child_added', snapshot => {
        store.dispatch('ADD_TODO', {todo: snapshot.val()});
      });

      this.todosRef.on('child_removed', snapshot => {
        store.dispatch('DELETE_TODO', {id: snapshot.val().id});
      });
    },
    beforeDestroy () {
      this.todosRef.off();
      store.dispatch('RESET_TODOS');
    }
  });
</script>
