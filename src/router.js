import Router from 'vue-router';
import TodoApp from 'components/todo';
import Home from 'components/home';
import NotFound from 'components/errors/404';
import SignUp from 'components/authentication/signup';
import SignUpSuccess from 'components/authentication/signup-success';

// Router options
var router = new Router({
    hashbang: false,
    root: '/',
    linkActiveClass: 'active'
});

// Set routes
router.map({
    '*': {
      component: NotFound
    },
    '/': {
      component: Home
    },
    '/todo': {
      component: TodoApp
    },
    '/signup': {
      component: SignUp
    },
    '/signup-success': {
      component: SignUpSuccess
    }
});

export default router;