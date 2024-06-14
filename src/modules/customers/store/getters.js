
export const getCustomers = (state) => {
    return state.customers
}

export const getCustomerById = (state) => (id = '') => {
    return state.customers.find((customer) => customer.id === id)
}

export const getFields = (state) => {
    return state.fieldsForm
}