/* eslint-disable */
import Vue from 'vue';

import VueRouter from 'vue-router';
import store from '../store';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index[age',
            component: () => import('../pages/index.vue')  // component: IndexPage
        },
        {
            path: '/mine',
            name: 'MinePage',
            component: () => import('../pages/mine.vue')
        },
        {
            path: '/city',
            children: [
                {
                    path: '/bjs',
                    name: 'BJSPage',
                    component: () => import('../pages/city/bjs.vue')
                },
                {
                    path: '/can',
                    name: 'CANPage',
                    component: () => import('../pages/city/can.vue'),
                    meta: {
                        requiresAuth: true,
                    }
                }
            ]
        },
        {
            path: '*',
            name: 'ErrorPage',
            component: () => import('../pages/error.vue')
        },
        {
            path: '/no-access',
            name: 'NoAccessPage',
            component: () => import('../pages/no-access.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    let citySN = store.state.citySN,
        hasIp = store.getters['hasIp']
    if(!citySN || !hasIp) {
        try {
            await store.dispatch('getIpFromSohu')
        } catch (error) {
            next('/error')
            return
        }
    }
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (!requiresAuth) {
        next()
        return
    }
    next('/no-access')
});

router.afterEach((from, to)=> {
    //global log here
})


export default router