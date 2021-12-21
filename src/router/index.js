import { createRouter, createWebHistory} from 'vue-router'
import Welcome from '../views/Welcome'
import Login from '../views/Login'
import Session from '../service/session'
import Signup from '../views/Signup'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next) =>{
    if(to.meta.rquiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
})

export default router