export default {
    name:'users',
    component: () => import('@/modules/users/layout/UserLayout.vue'),
    children:[       
        {
            path:'list',
            name:'list-users',
            component: () => import('@/modules/users/views/ListUsers.vue')
        },
        {
            path:'creation',
            name:'creation-user',
            component: () => import('@/modules/users/views/CreationUser.vue')
        },
        {
            path:'update/:id',
            name:'update-user',
            component: () => import('@/modules/users/views/UpdateUser.vue'),
            props: true
        },
        {
            path:'detail',
            name:'detail-user',
            component: () => import('@/modules/users/views/UserDetailAccount.vue')
        }
    ],
    meta: {
        // requiresAuth: true,
        redirectToList: true
    }
}