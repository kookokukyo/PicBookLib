/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/bookmanage',
    component: Layout,
    redirect: '/bookmanage/menu1',
    name: '图书管理',
    meta: {
        title: '图书管理',
        icon: 'nested'
    },
    children: [{
            path: 'borrow',
            component: () =>
                import ('@/views/bookmanage/borrow/index'), // Parent router-view
            name: '借书',
            meta: { title: '借书' }
        }, {
            path: 'repay',
            component: () =>
                import ('@/views/bookmanage/repay/index'), // Parent router-view
            name: '还书',
            meta: { title: '还书' }
        }, {
            path: 'stack',
            component: () =>
                import ('@/views/bookmanage/stack/index'), // Parent router-view
            name: '书库管理',
            meta: { title: '书库管理' }
        },
        {
            path: 'member',
            name: '会员管理',
            component: () =>
                import ('@/views/bookmanage/member/index'),
            meta: { title: '会员管理' }
        }
    ]
}

export default nestedRouter