import { onMounted } from 'vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const useGestor = ({pathSetValues,pathSetFields,dataFields,pathGetValues,pathToUpdate,pathDelete}) => {
    const dataValues = ref([])
    const isLoading = ref(true)
    const store = useStore()
    const router = useRouter()

    const getDataRegister = async () => {
        await store.dispatch(String(pathSetValues))
        await store.dispatch(String(pathSetFields), dataFields)
        dataValues.value = store.getters[String(pathGetValues)]
    }

    const updateRegister = (idRegister) => {
        console.log(idRegister);
        router.push({ name: String(pathToUpdate), params: { id: idRegister } });
      }
  
      const deleteRegister = async (idRegister) => {
        await store.dispatch(String(pathDelete),idRegister)
      }

    watch(
        dataValues,
        () => {
        isLoading.value = false
    })

    onMounted(() => {
        getDataRegister()
    })

    return{
        updateRegister,
        deleteRegister,

        dataValues,
        isLoading
    }
}

export default useGestor