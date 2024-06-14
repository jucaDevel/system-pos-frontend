import {createRegister,loadRegister, updateRegister, deleteRegister} from '@/utils/services/crudActions'


export const saveCategory = async({commit},dataCategory) => {
    try {
        const { name } = await createRegister('/categories.json',dataCategory)
        const dataCategorySaved = {
            id: name,
            ...dataCategory
        }
    
        commit('saveCategory',dataCategorySaved)
    } catch (error) {
        console.error(error)
    }
}

export const updateCategory = async({commit},dataCategory) => {
    try {
        const {idCategory, data} = dataCategory
        await updateRegister(`/categories/${idCategory}.json`, data)
    
        commit('updateCategory',dataCategory)
    } catch (error) {
        console.error(error)
    }
}

export const deleteCategory = async({commit},idCategory) => {
    try {
        await deleteRegister(`/categories/${idCategory}.json`)
    
        commit('deleteCategory',idCategory)
    } catch (error) {
        console.error(error)
    }
}

export const setCategories = async({commit}) => {
    try {
        const dataCategories = await loadRegister('/categories.json')
        if (!dataCategories) {
            commit('setCategories',[])
        }
        const categories = []
    
        for(let id of Object.keys(dataCategories)){
            categories.push({
                id,
                ...dataCategories[id]
            })
        }
    
        commit('setCategories',categories)
    } catch (error) {
        console.log(error);
        commit('setCategories',[])
    }
}

export const setFields = async({commit}, dataFields) => {
    
    if (!dataFields) {
        commit('setFields',[])
    }

    commit('setFields',dataFields)
}