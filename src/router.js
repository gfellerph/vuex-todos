import Router from 'vue-router';
import TodoApp from 'components/todo';
import Home from 'components/home';
import NotFound from 'components/errors/404';

// Router options
var router = new Router({
    hashbang: false,
    root: '/'
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
    }
});

export default router;