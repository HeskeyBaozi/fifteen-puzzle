import Vue from 'vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'normalize.css';
import '../theme/index.css';
import './index.css';

Vue.use(ElementUI);

const app = new Vue({
    store,
    router
});


// go!!!
app.$mount('#root');