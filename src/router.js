import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from './routes/Layout.vue';
import Game from './routes/Game.vue'

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Layout,
        children: [
            {
                name: 'game',
                path: 'game',
                component: Game
            },
            {
                name: 'about',
                path: 'about',
                component: {template: `<div>about</div>`}
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;