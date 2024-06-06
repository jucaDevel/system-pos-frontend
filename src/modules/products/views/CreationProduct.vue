<template>
  <h1>Crear producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <FormCreation :dataFields="dataFields"/>
  </div>
</template>

<script>
// import { ref } from "vue";
import useCreateProduct from "@/modules/products/composables/useCreateProduct";
import FormCreation from '../components/FormCreation'
export default {
  components:{
    FormCreation
  },
  setup() {
    const { dataFields,createProduct } = useCreateProduct()

    const preventSubmitOnEnter = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    return {
        dataFields,

        createProduct,
        preventSubmitOnEnter
    };
  },
};
</script>

<style>
</style>