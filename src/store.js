import Vuex from 'vuex';

import todo from 'components/todo/todo-store';
import auth from 'components/authentication/authentication-store';

export default new Vuex.Store({
	state: Object.assign(
		{},
		{todo: todo.state},
		{auth: auth.state}
	),
	mutations: Object.assign(
		{},
		todo.mutations,
		auth.mutations
	)
});