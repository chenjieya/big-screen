import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            // component: () => import('@/views/home/index.vue')
            redirect: '/bs'
        },
        {
            path: '/bs',
            name: 'BigScreen',
            component: () => import('@/views/big-screen/index.vue')
        },
        {
            path: '*',
            redirect: '/404',
            hidden: true
        }
    ]
})