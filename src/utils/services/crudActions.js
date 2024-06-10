import apiDataBase from '@/api/apiDataBase'

export const createRegister = async (route,dataProduct) => {
    try {
        const { data } = await apiDataBase.post(route,dataProduct)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const updateRegister = async (route, /*id,*/ dataProduct) => {
    try {
        const { data } = await apiDataBase.put(route,dataProduct)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const loadRegister = async (route) => {
    try {
        const { data } = await apiDataBase.get(route)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const deleteRegister = async (route, /*id*/) => {
    try {
        await apiDataBase.delete(route)

    } catch (error) {
        console.log(error);
    }
}