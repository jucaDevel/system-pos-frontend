import {createRegister,loadRegister, updateRegister, deleteRegister} from '@/utils/services/crudActions'


export const saveProduct = async({commit},dataProduct) => {
    const { name } = await createRegister('/products.json',dataProduct)
    const dataProductSaved = {
        id: name,
        ...dataProduct
    }

    commit('saveProduct',dataProductSaved)
}

export const updateProduct = async({commit},dataProduct) => {
    const {idProduct, data} = dataProduct
    await updateRegister(`/products/${idProduct}.json`, data)

    commit('updateProduct',dataProduct)
}

export const deleteProduct = async({commit},idProduct) => {
    
    await deleteRegister(`/products/${idProduct}.json`)

    commit('deleteProduct',idProduct)
}

export const setProducts = async({commit}) => {
    const dataProducts = await loadRegister('/products.json')
    
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

export const setFields = async({commit}, dataFields) => {
    
    if (!dataFields) {
        commit('setFields',[])
    }

    commit('setFields',dataFields)
}