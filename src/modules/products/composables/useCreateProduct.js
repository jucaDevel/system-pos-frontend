import {reactive} from 'vue'
import {useStore} from 'vuex'

const useCreateProduct = () => {
    const dataFields = reactive({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        purchasePrice: 0,
        wholeSalePrice: 0,
        utility: 0,
        id_category: '',
        bar_code: 0
    })
    const store = useStore();

    const createProduct = async () => {
        try {
            const objectParams = {
                ...dataFields,
                status:1
            };
              
            await store.dispatch('productStore/saveProduct',objectParams)
            
        } catch (error) {
            console.log(error);
        }
    }

    return{
        dataFields,
        createProduct
    }
}

export default useCreateProduct