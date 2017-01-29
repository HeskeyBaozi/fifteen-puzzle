import Vue from 'vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './index.css';

const app = new Vue({
    store,
    router
});


// go!!!
app.$mount('#root');