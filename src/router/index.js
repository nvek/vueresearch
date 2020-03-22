import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Blog from '../components/Blog'
import Todopage from '../components/Todopage'

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
