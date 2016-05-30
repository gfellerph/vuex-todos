import Vuex from 'vuex';

import todo from 'components/todo/todo-store';
import auth from 'components/authentication/authentication-store';

export default new Vuex.Store({
	strict: true,
	modules: {
		todo,
		auth
	}
});