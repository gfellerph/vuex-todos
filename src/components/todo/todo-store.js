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
      action.todo.toggled = !action.todo.toggled;
    },

    SET_FILTER: (state, action) => {
      state.activeFilter = action.activeFilter;
    },

    DELETE_TODO: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.id);
    },

    RESET_TODOS: (state, action) => {
      state.todos = [];
      state.activeFilter = false;
    }
  }
}