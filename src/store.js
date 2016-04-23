import Vue from 'vue';
import Vuex from 'vuex';
import cuid from 'cuid';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todosById: {},
    activeFilter: null
  },
  mutations: {
    ADD_TODO (state, action) {
      const id = cuid();
      state.todosById = Object.assign({}, state.todosById, {
        [id]: {id: id, text: action.text, toggled: false}
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