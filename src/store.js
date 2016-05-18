import Vue from 'vue';
import Vuex from 'vuex';
import cuid from 'cuid';

export default new Vuex.Store({

  // Default state
  state: {
    todos: [],
    activeFilter: null
  },

  // Reducers
  mutations: {

    ADD_TODO (state, action) {
      state.todos.push({
        id: cuid(),
        text: action.text,
        toggled: false
      });
    },

    TOGGLE_TODO (state, action) {
      action.todo.toggled = !action.todo.toggled;
    },

    SET_FILTER (state, action) {
      state.activeFilter = action.activeFilter;
    },
  }
});