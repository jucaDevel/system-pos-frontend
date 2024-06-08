<template>
  <h1>Crear producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="createProduct" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import CustomForm from "@/components/CustomForm";
import dataFields from "@/utils/fields";
export default {
  components: {
    CustomForm,
  },
  setup() {
    const store = useStore();
    const createProduct = async (dataFields) => {
      try {
        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("productStore/saveProduct", objectParams);
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

<style>
</style>