import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './routes/App.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: App
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;