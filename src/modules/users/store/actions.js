import {createRegister,loadRegister, updateRegister, deleteRegister} from '@/utils/services/crudActions'


export const saveUser = async({commit},dataUser) => {
    try {
        const { name } = await createRegister('/users.json',dataUser)
        const dataUserSaved = {
            id: name,
            ...dataUser
        }
    
        commit('saveUser',dataUserSaved)
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async({commit},dataUser) => {
    try {
        const {idUser, data} = dataUser
        await updateRegister(`/users/${idUser}.json`, data)
    
        commit('updateUser',dataUser)
    } catch (error) {
        console.error(error)
    }
}

export const deleteUser = async({commit},idUser) => {
    try {
        await deleteRegister(`/users/${idUser}.json`)
    
        commit('deleteUser',idUser)
    } catch (error) {
        console.error(error)
    }
}

export const setUsers = async({commit}) => {
    try {
        const dataUsers = await loadRegister('/users.json')
        if (!dataUsers) {
            commit('setUsers',[])
        }
        const users = []
    
        for(let id of Object.keys(dataUsers)){
            users.push({
                id,
                ...dataUsers[id]
            })
        }
    
        commit('setUsers',users)
    } catch (error) {
        console.log(error);
        commit('setUsers',[])
    }
}

export const setFields = async({commit}, dataFields) => {
    
    if (!dataFields) {
        commit('setFields',[])
    }

    commit('setFields',dataFields)
}