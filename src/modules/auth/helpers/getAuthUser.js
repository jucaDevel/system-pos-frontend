import usersBD from '@/utils/usersBD'

const getUserAuth = async (dataUser) => {
    let resp = {
        status: false,
        message: 'FAILURE'
    }

    for (const user of usersBD) {
        if (user.password !== dataUser.password || user.userName !== dataUser.userName) {
            resp =  {
                status: false,
                message: 'Usuario y/o contraseña incorrecta'
            }
        }
        else if (user.userName === dataUser.userName && user.password === dataUser.password) {
            return {
                status: true,
                message: 'Bienvenido'
            }
        }
    }

    return resp
}

export default getUserAuth