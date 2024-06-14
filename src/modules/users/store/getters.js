
export const getUsers = (state) => {
    return state.users
}

export const getUserById = (state) => (id = '') => {
    return state.users.find((user) => user.id === id)
}

export const getFields = (state) => {
    return state.fieldsForm
}