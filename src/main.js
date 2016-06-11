import App from 'src/App';
import router from 'src/router';
import validator from 'src/validator';
import Touch from 'vue-touch';
import Vue from 'vue';

Vue.use(Touch);

// Mount app with router
router.start(App, '#vue-app');