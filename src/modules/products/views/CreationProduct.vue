<template>
  <h1>Crear producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="createProduct" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import CustomForm from "@/components/CustomForm";
import dataFields from "@/utils/fields";
export default {
  components: {
    CustomForm,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const createProduct = async (dataFields) => {
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

    return {
      dataFields,

      createProduct,
    };
  },
};
</script>