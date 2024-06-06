import {createProduct,loadProducts} from '../services/crudActions'


export const saveProduct = async({commit},dataProduct) => {
    const { name } = await createProduct(dataProduct)
    const dataProductSaved = {
        id: name,
        ...dataProduct
    }

    commit('saveProduct',dataProductSaved)
}

export const setProducts = async({commit}) => {
    const dataProducts = await loadProducts()

    if (!dataProducts) {
        commit('setProducts',[])
    }
    const products = []

    for(let id of Object.keys(dataProducts)){
        products.push({
            id,
            ...dataProducts[id]
        })
    }    
    commit('setProducts',products)
}