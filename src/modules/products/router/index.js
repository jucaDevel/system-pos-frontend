export default {
    name: 'products',
    component:()=>import('@/modules/products/layouts/LayoutProducts.vue'),
    children:[
        {
            path: '',
            redirect: { name: 'list-product' }
        },
        {
            path:'list',
            name:'list-product',
            component: () => import('@/modules/products/views/ListProducts.vue')
        },
        {
            path:'creation',
            name:'creation-product',
            component: () => import('@/modules/products/views/CreationProduct.vue')
        }        
    ]
}