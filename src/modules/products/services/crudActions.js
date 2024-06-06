import apiDataBase from '@/api/apiDataBase'

export const createProduct = async (dataProduct) => {
    try {
        const { data } = await apiDataBase.post('/products.json',dataProduct)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const loadProducts = async () => {
    try {
        const { data } = await apiDataBase.get('/products.json')
        return data
    } catch (error) {
        console.log(error);
    }
}