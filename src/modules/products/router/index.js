export default {
    name: 'products',
    component:()=>import('@/modules/products/layouts/LayoutProducts.vue'),
    children:[
        {
            path:'list',
            name:'list-product',
            component: () => import('@/modules/products/views/ListProducts.vue')
        },
        {
            path:'creation',
            name:'creation-product',
            component: () => import('@/modules/products/views/CreationProduct.vue')
        },
        {
            path:'update/:id',
            name:'update-product',
            component: () => import('@/modules/products/views/UpdateProduct.vue'),
            props: true
        }
    ],
    meta: {
        // requiresAuth: true,
        redirectToList: true
    }
}