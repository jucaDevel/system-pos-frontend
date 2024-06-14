import {createRegister,loadRegister, updateRegister, deleteRegister} from '@/utils/services/crudActions'


export const saveProduct = async({commit},dataProduct) => {
    try {
        const { name } = await createRegister('/products.json',dataProduct)
        const dataProductSaved = {
            id: name,
            ...dataProduct
        }
    
        commit('saveProduct',dataProductSaved)
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async({commit},dataProduct) => {
    try {
        const {idProduct, data} = dataProduct
        await updateRegister(`/products/${idProduct}.json`, data)
    
        commit('updateProduct',dataProduct)
    } catch (error) {
        console.error(error)
    }
}

export const deleteProduct = async({commit},idProduct) => {
    try {
        await deleteRegister(`/products/${idProduct}.json`)
    
        commit('deleteProduct',idProduct)
    } catch (error) {
        console.error(error);
    }
}

export const setProducts = async({commit}) => {
    try {
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
    } catch (error) {
        console.error(error)
        commit('setProducts',[])
    }
}

export const setFields = async({commit}, dataFields) => {
    
    if (!dataFields) {
        commit('setFields',[])
    }

    commit('setFields',dataFields)
}