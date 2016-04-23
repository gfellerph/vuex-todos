import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    activeFilter: null
  },
  mutations: {
    ADD_TODO (state, action) {
      state.todos.push({text: action.text, toggled: false});
    },

    TOGGLE_TODO (state, action) {
      action.todo.toggled = !action.todo.toggled;
    },

    SET_FILTER (state, action) {
      state.activeFilter = action.activeFilter;
    },
  }
});