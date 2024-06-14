export default {
    name:'categories',
    component: () => import('@/modules/categories/layouts/CategoryLayout.vue'),
    children:[       
        {
            path:'list',
            name:'list-categories',
            component: () => import('@/modules/categories/views/ListCategories.vue')
        },
        {
            path:'creation',
            name:'creation-category',
            component: () => import('@/modules/categories/views/CreationCategory.vue')
        },
        {
            path:'update/:id',
            name:'update-category',
            component: () => import('@/modules/categories/views/UpdateCategory.vue'),
            props: true
        }
    ],
    meta: {
        // requiresAuth: true,
        redirectToList: true
    }
}