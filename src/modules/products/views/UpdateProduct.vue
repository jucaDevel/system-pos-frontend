<template>
  <h1>Actualizar producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="updateProduct" v-if="isLoaded"/>
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
    const dataFields = ref((store.getters['productStore/getFields'].length > 0)?JSON.parse(JSON.stringify(store.getters['productStore/getFields'])):[])
    const isLoaded = ref(false)
    const idProduct = route.params.idProduct

    const getProductById = () => {
      const dataProduct = store.getters['productStore/getProductById'](idProduct)
      const keys = Object.keys(dataProduct)
      if(dataFields.value.length > 0){
        Object.values(dataFields.value).forEach((field) => {
            if(keys.includes(field.name)){
                field['value'] = dataProduct[field.name]
            }
        })

        isLoaded.value = true
      }
    }

    const updateProduct = async (dataFields) => {
      try {

        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("productStore/updateProduct", { idProduct, data: objectParams });
        router.push({name:'list-product'})
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getProductById()
    })

    return {
      dataFields,
      isLoaded,

      updateProduct,
    };
  },
};
</script>