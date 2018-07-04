import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexApp from './index'
import LeanApp from './leanApp'

const routes = [
    {path: '/', component: IndexApp},
    {path: '/lean', component: LeanApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')