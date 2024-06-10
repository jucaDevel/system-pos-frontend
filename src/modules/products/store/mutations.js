export const saveProduct = (state, dataProductSaved) => {
    state.products.unshift(dataProductSaved)
}

export const setProducts = (state, dataProducts) => {
    if(!state.isProductsLoaded){
        state.products = [...state.products, ...dataProducts]
        state.isProductsLoaded = true
    }
}

export const setFields = (state, dataFields) => {
   state.fieldsForm = [...dataFields]
}

export const updateProduct = (state, dataProduct) => {
    const index = state.products.map(e => e.id).indexOf( dataProduct.idProduct )
    const data = {
        id: dataProduct.idProduct,
        ...dataProduct.data
    }
    state.products[index] = data
}

export const deleteProduct = (state, idProduct) => {
    const index = state.products.map(e => e.id).indexOf( idProduct )
    
    state.products.splice(index,1)
}