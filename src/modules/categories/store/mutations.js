export const saveCategory = (state, dataCategorySaved) => {
    state.categories.unshift(dataCategorySaved)
}

export const setCategories = (state, dataCategory) => {
    if(!state.isCategoriesLoaded){
        state.categories = [...state.categories, ...dataCategory]
        state.isCategoriesLoaded = true
    }
}

export const setFields = (state, dataFields) => {
   state.fieldsForm = [...dataFields]
}

export const updateCategory = (state, dataCategory) => {
    const index = state.categories.map(e => e.id).indexOf( dataCategory.idCategory )
    const data = {
        id: dataCategory.idCategory,
        ...dataCategory.data
    }
    state.categories[index] = data
}

export const deleteCategory = (state, idCategory) => {
    const index = state.categories.map(e => e.id).indexOf( idCategory )
    
    state.categories.splice(index,1)
}