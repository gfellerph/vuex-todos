import Vue from 'vue';
import Vuex from 'vuex';

import todo from 'components/todo/todo-store';

export default new Vuex.Store(Object.assign(
  {},
  todo
));