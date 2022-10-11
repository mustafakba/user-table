import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from './components/AboutPage.vue'
import HomePage from "@/components/HomePage";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/about/:id',
            component : AboutPage
        },
        {
            path:'/',
            component :HomePage
        }

    ],
    mode:'history'
})

export default router