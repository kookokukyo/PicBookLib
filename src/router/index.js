/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import nestedRouter from './modules/nested'

export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () =>
            import ('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: '首页', icon: 'dashboard', affix: true }
        }]
    },
    {
        path: '/scancode',
        component: Layout,
        redirect: '/scancode/index',
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/scancode/index'),
            name: 'ScanCode',
            meta: { title: '图书管理', icon: 'guide', noCache: true }
        }]
    },
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/profile/index'),
            name: 'Profile',
            meta: { title: '用户信息', icon: 'user', noCache: true }
        }]
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            title: '权限管理',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [{
                path: 'page',
                component: () =>
                    import ('@/views/permission/page'),
                name: 'PagePermission',
                meta: {
                    title: 'Page Permission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: () =>
                    import ('@/views/permission/directive'),
                name: 'DirectivePermission',
                meta: {
                    title: 'Directive Permission'
                        // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'role',
                component: () =>
                    import ('@/views/permission/role'),
                name: 'RolePermission',
                meta: {
                    title: 'Role Permission',
                    roles: ['admin']
                }
            }
        ]
    },

    {
        path: '/icon',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/icons/index'),
            name: 'Icons',
            meta: { title: 'Icons', icon: 'icon', noCache: true }
        }]
    },

    /** when your routing map is too long, you can split it into small modules **/
    // nestedRouter,

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router