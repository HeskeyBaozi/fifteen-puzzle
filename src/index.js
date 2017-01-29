import Vue from 'vue';
import router from './router';
import store from './store';

const app = new Vue({
    template: `<router-view></router-view>`,
    store,
    router
});


// go!!!
app.$mount('#root');