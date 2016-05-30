import firebase from 'src/firebase';
import Todo from 'models/Todo';
import store from 'src/store';

const todosRef = firebase.database().ref('todos');

todosRef.on('child_added', snapshot => {
  store.dispatch('ADD_TODO', {todo: snapshot.val()});
});

todosRef.on('child_removed', snapshot => {
  console.log('child_removed', {id: snapshot.val().id});
});

export default {

  // Default state
  state: {
    todos: [],
    activeFilter: false
  },

  // Reducers
  mutations: {

    ADD_TODO: (state, action) => {
      state.todos.push(action.todo);
    },

    TOGGLE_TODO: (state, action) => {
      action.toggled = !action.toggled;
    },

    SET_FILTER: (state, action) => {
      state.activeFilter = action.activeFilter;
    },

    DELETE_TODO: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.id);
    },
  }
}