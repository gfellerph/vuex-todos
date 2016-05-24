import App from 'src/App';
import router from 'src/router';
import VueTouch from 'vue-touch';
import validator from 'vue-validator';

Vue.use(VueTouch);

// Mount app with router
router.start(App, '#vue-app');