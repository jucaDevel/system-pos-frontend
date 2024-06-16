export default {
    name:'auth',
    component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
    children:[       
        {
            path:'login',
            name:'login',
            component: () => import('@/modules/auth/views/LoginView.vue')
        },
        {
            path:'forgetPassword',
            name:'forget-password',
            component: () => import('@/modules/auth/views/ForgetPassword.vue')
        },
    ],
    meta: {
        // requiresAuth: true,
        redirectToList: true
    }
}