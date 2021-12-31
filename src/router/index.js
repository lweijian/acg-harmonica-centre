import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/test',
        name: 'test',
        alias: '/test',
        component: () => import( '../views/Test')
    },
    {
        path: '/404',
        name: '404',
        alias: '/404',
        component: () => import( '../views/404')
    },
    {
        path: "*",
        redirect: "/404"
    },
    {
        path: '/',
        name: 'index',
        alias: "/index",
        component: () => import( '../views/Index'),
    },
    {
        path: '/login',
        name: 'login',
        alias: '/login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/about',
        name: 'about',
        alias: '/about',
        component: () => import( '../views/About.vue'),
    },
    {
        path: '/music_video',
        name: 'musicVideo',
        alias: '/music_video',
        component: () => import( '../views/MusicVideo.vue')
    },
    {
        path: '/forum',
        name: 'forum',
        alias: '/forum',
        component: () => import( '../views/Forum.vue')
    },
    {
        path: '/music',
        name: 'music',
        alias: '/music',
        component: () => import( '../views/Music.vue'),

    },
    {
        path: '/register',
        name: 'register',
        alias: '/register',
        component: () => import( '../views/Register.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        alias: '/admin',
        component: () => import( '../views/Admin'),
        children: [{
            path: '',
            name: 'user_management',
            component: () => import( '../components/UserManagement')
        },
            {
                path: 'user_management',
                name: 'user_management',
                component: () => import( '../components/UserManagement')
            },
            {
                path: 'video_management',
                name: 'video_management',
                component: () => import( '../components/VideoManagement')
            },
            {
                path: 'music_management',
                name: 'music_management',
                component: () => import( '../components/MusicManagement')
            }
        ]

    },
]

const router = new VueRouter({
    mode: "history",
    routes
})


router.beforeEach((to, form, next) => {


    //注册和登录放行
    if (to.path === "/login" || to.path === "/register") {
        next()
        return;
    }

    //判断是否有token，没有就重新登录
    if (store.state.accessToken == null || store.state.accessToken === "") {
        next("/login")
        return;
    }

    //如果有token，就判断是否去admin管理页面，需要去后端确认权限，如果不是就放行
    if (to.path === "/admin") {
        if (store.state.roleName === "admin") {
            next()
        } else {
            next("/404")
        }
    } else {
        next()
    }

})
export default router
