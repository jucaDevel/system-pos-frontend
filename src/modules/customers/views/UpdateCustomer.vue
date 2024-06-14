<template>
  <h1>Actualizar producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="updateCustomer" v-if="isLoaded"/>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, defineAsyncComponent } from 'vue';
export default {
  components: {
    CustomForm: defineAsyncComponent(()=> import('@/components/CustomForm'))
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const dataFields = ref((store.getters['customerStore/getFields'].length > 0)?JSON.parse(JSON.stringify(store.getters['customerStore/getFields'])):[])
    const isLoaded = ref(false)
    const idCustomer = route.params.id

    const getCustomerById = () => {
      const dataCustomer = store.getters['customerStore/getCustomerById'](idCustomer)
      const keys = Object.keys(dataCustomer)
      if(dataFields.value.length > 0){
        Object.values(dataFields.value).forEach((field) => {
            if(keys.includes(field.name)){
                field['value'] = dataCustomer[field.name]
            }
        })

        isLoaded.value = true
      }
    }

    const updateCustomer = async (dataFields) => {
      try {

        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("customerStore/updateCustomer", { idCustomer, data: objectParams });
        router.push({name:'list-customers'})
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getCustomerById()
    })

    return {
      dataFields,
      isLoaded,

      updateCustomer,
    };
  },
};
</script>

<style>

</style>