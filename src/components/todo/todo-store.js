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
      state.todos = state.todos.map(todo => {
        return (todo.id == action.todo.id) ? action.todo : todo;
      });
    },

    SET_FILTER: (state, action) => {
      state.activeFilter = action.activeFilter;
    },

    DELETE_TODO: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.todo.id);
    },

    RESET_TODOS: (state, action) => {
      state.todos = [];
      state.activeFilter = false;
    }
  }
}