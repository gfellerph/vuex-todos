import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from './App'

var Home = Vue.extend({
    template: '<p>This is Sparta!</p>'
});

var App = Vue.extend({});

var router = new Router({
    hashbang: false
});

router.map({
    '/home': {
        component: Home
    },
    '/todo': {
        component: TodoApp
    }
});

router.start(App, '#app');