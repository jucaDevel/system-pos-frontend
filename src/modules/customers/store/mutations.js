export const saveCustomer = (state, dataCustomerSaved) => {
    state.customers.unshift(dataCustomerSaved)
}

export const setCustomers = (state, dataCustomer) => {
    if(!state.isCustomersLoaded){
        state.customers = [...state.customers, ...dataCustomer]
        state.isCustomersLoaded = true
    }
}

export const setFields = (state, dataFields) => {
   state.fieldsForm = [...dataFields]
}

export const updateCustomer = (state, dataCustomer) => {
    const index = state.customers.map(e => e.id).indexOf( dataCustomer.idCustomer )
    const data = {
        id: dataCustomer.idCustomer,
        ...dataCustomer.data
    }
    state.customers[index] = data
}

export const deleteCustomer = (state, idCustomer) => {
    const index = state.customers.map(e => e.id).indexOf( idCustomer )
    
    state.customers.splice(index,1)
}