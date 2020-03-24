import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '../components/HelloWorld'
import Home from '../view/Home'
import Blog from '../view/Blog'
import Todopage from '../view/Todopage'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/todos',
            name: 'todolist',
            component: Todopage
        }

    ]
});

export default router
