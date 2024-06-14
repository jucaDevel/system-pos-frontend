import {createRegister,loadRegister, updateRegister, deleteRegister} from '@/utils/services/crudActions'


export const saveCustomer = async({commit},dataCustomer) => {
    try {
        const { name } = await createRegister('/customers.json',dataCustomer)
        const dataCustomerSaved = {
            id: name,
            ...dataCustomer
        }
    
        commit('saveCustomer',dataCustomerSaved)
    } catch (error) {
        console.error(error)
    }
}

export const updateCustomer = async({commit},dataCustomer) => {
    try {
        const {idCustomer, data} = dataCustomer
        await updateRegister(`/customers/${idCustomer}.json`, data)
    
        commit('updateCustomer',dataCustomer)
    } catch (error) {
        console.error(error)
    }
}

export const deleteCustomer = async({commit},idCustomer) => {
    try {
        await deleteRegister(`/customers/${idCustomer}.json`)
    
        commit('deleteCustomer',idCustomer)
    } catch (error) {
        console.error(error)
    }
}

export const setCustomers = async({commit}) => {
    try {
        const dataCustomers = await loadRegister('/customers.json')
        if (!dataCustomers) {
            commit('setCustomers',[])
        }
        const customers = []
    
        for(let id of Object.keys(dataCustomers)){
            customers.push({
                id,
                ...dataCustomers[id]
            })
        }
    
        commit('setCustomers',customers)
    } catch (error) {
        console.log(error);
        commit('setCustomers',[])
    }
}

export const setFields = async({commit}, dataFields) => {
    
    if (!dataFields) {
        commit('setFields',[])
    }

    commit('setFields',dataFields)
}