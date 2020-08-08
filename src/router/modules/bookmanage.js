/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/bookmanage',
    component: Layout,
    redirect: 'noRedirect',
    name: 'bookmanage',
    meta: {
        title: '图书管理',
        icon: 'bookmanage'
    },
    children: [{
            path: 'borrow',
            component: () =>
                import ('@/views/bookmanage/borrow/index'), // Parent router-view
            name: 'borrow',
            meta: { title: '借阅图书' }
        }, {
            path: 'repay',
            component: () =>
                import ('@/views/bookmanage/repay/index'), // Parent router-view
            name: 'repay',
            meta: { title: '归还图书' }
        }, {
            path: 'stack',
            component: () =>
                import ('@/views/bookmanage/stack/index'), // Parent router-view
            name: 'stack',
            meta: { title: '书库管理' }
        },
        {
            path: 'member',
            name: 'member',
            component: () =>
                import ('@/views/bookmanage/member/index'),
            meta: { title: '会员管理' }
        }
    ]
}

export default nestedRouter