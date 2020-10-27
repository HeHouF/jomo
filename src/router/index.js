import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shpper from '@/page/Shpper'
import Paper from '@/page/Paper'
import Food from '@/page/Food'
import Order from '@/page/Order'
import addShop from '@/page/addShop'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/HelloWorld'
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [
                { path: '/shpper', name: 'shpper', component: Shpper },
                { path: '/paper', name: 'paper', component: Paper },
                { path: '/food', name: 'food', component: Food },
                { path: '/order', name: 'order', component: Order },
                { path: '/addshop', name: 'addshop', component: addShop },


            ]
        }
    ]
})