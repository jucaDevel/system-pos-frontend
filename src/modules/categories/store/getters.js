
export const getCategories = (state) => {
    return state.categories
}

export const getCategoryById = (state) => (id = '') => {
    return state.categories.find((category) => category.id === id)
}

export const getFields = (state) => {
    return state.fieldsForm
}