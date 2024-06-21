import getUserAuth from "../helpers/getAuthUser"

export const getUserByLogin = async({commit}, dataUser) => {
    
    const { status,message, user } = await getUserAuth(dataUser)
    const token = '123456789'
    if (status) {
        sessionStorage.setItem('user', JSON.stringify({user: user}))
        sessionStorage.setItem('token', token)
        const paramsAuth = {
            user:user, 
            token
        }
        commit('setUserByLogin',paramsAuth)
    }

    return {
        status,
        message
    }

}

export const checkAuth = async({commit}) => {
    
    const token = sessionStorage.getItem('token')
    if (!token) {
        commit('logout')
        return {
            status:false,
            message: 'Sesion expirada'
        }
    }
    
    const user = JSON.parse(sessionStorage.getItem('user'))

    try {
        const paramsAuth = {
            ...user, 
            token
        }

        commit('setUserByLogin', paramsAuth)
        return {
            status:true,
        }
    } catch (error) {
        commit('logout')
        return {
            status:false,
            message: error
        }
    }

}