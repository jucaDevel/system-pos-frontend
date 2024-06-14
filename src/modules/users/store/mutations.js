export const saveUser = (state, dataUserSaved) => {
    state.users.unshift(dataUserSaved)
}

export const setUsers = (state, dataUser) => {
    if(!state.isUsersLoaded){
        state.users = [...state.users, ...dataUser]
        state.isUsersLoaded = true
    }
}

export const setFields = (state, dataFields) => {
   state.fieldsForm = [...dataFields]
}

export const updateUser = (state, dataUser) => {
    const index = state.users.map(e => e.id).indexOf( dataUser.idUser )
    const data = {
        id: dataUser.idUser,
        ...dataUser.data
    }
    state.users[index] = data
}

export const deleteUser = (state, idUser) => {
    const index = state.users.map(e => e.id).indexOf( idUser )
    
    state.users.splice(index,1)
}