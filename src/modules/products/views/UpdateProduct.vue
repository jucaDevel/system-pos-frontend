<template>
  <h1>Actualizar producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="fields" @on:saveRegister="updateProduct" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router'
import CustomForm from "@/components/CustomForm";
import dataFields from "@/utils/fields";
import { onMounted, ref } from 'vue';
export default {
  components: {
    CustomForm,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const fields = ref(JSON.parse(JSON.stringify(dataFields)))
    const idProduct = route.params.idProduct
    // const dataFieldsProduct = ref({})

    const getProductById = async () => {
        const dataProduct = store.getters['productStore/getProductById'](idProduct)
        const keys = Object.keys(dataProduct)
        Object.values(fields.value).forEach((field) => {
            if(keys.includes(field.name)){
                field['value'] = dataProduct[field.name]
            }
        })
        
    }

    const updateProduct = async (dataFields) => {
      try {
        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("productStore/saveProduct", objectParams);
        router.push({name:'list-product'})
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
        getProductById()
    })

    return {
      fields,

      updateProduct,
    };
  },
};
</script>