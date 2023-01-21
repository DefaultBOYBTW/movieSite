import { createRouter, createWebHistory } from "vue-router";    
import MainMenu from "../views/MainMenu.vue"
import LoginPage from"../views/LoginPage.vue"
import ShoppingArea from"../views/ShoppingArea.vue"
import Cart from"../views/Cart.vue"

const routes = [
    {
        path: '/',
        name: 'MainMenu',
        component: MainMenu
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/shopping',
        name: 'ShoppingArea',
        component: ShoppingArea
    },
    {
        path: '/cart',
        name:'cart',
        component: Cart
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;