import store from 'src/store';
import router from 'src/router';

export default {
	state: {
		loggedIn: false,
		user: null
	},
	mutations: {
		LOGIN: (state, action) => {
			state.loggedIn = true;
			state.user = action.user;
			router.go('/todo');
		},

		LOGOUT: (state, action) => {
			state.loggedIn = false;
			state.user = null;
		}
	}
}