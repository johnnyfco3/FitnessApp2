import { createRouter, createWebHistory} from 'vue-router'
import Welcome from '../views/Welcome'
import Login from '../views/Login'
import Session from '../service/session'
import Signup from '../views/Signup'
import Feed from '../views/Feed'
import Profile from '../views/Profile'
import Connections from '../views/Connections'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Feed,
        meta: { requiresLogin: true }
    },
    {
        path: '/connections',
        name: 'Connections',
        component: Connections
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
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
    if(to.meta.requiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
})

export default router