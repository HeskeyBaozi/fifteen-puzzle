import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from './routes/Layout.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Layout
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;