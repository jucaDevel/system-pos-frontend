export const saveProduct = (state, dataProductSaved) => {
    state.products.unshift(dataProductSaved)
}

export const setProducts = (state, dataProducts) => {
    if(!state.isProductsLoaded){
        state.products = [...state.products, ...dataProducts]
        state.isProductsLoaded = true
    }
}