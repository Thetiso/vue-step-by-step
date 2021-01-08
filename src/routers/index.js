import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../pages/index.vue')  // component: IndexPage
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to.fullPath, to.path,  location.href)
    next()
});


export default router