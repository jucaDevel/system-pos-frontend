export default {
    name:'customers',
    component: () => import('@/modules/customers/layouts/CustomerLayout.vue'),
    children:[       
        {
            path:'list',
            name:'list-customers',
            component: () => import('@/modules/customers/views/ListCustomers.vue')
        },
        {
            path:'creation',
            name:'creation-customer',
            component: () => import('@/modules/customers/views/CreationCustomer.vue')
        },
        {
            path:'update/:id',
            name:'update-customer',
            component: () => import('@/modules/customers/views/UpdateCustomer.vue'),
            props: true
        }
    ],
    meta: {
        // requiresAuth: true,
        redirectToList: true
    }
}