<template>
  <h1>Crear producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="createCustomer" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import CustomForm from "@/components/CustomForm";
import { computed } from 'vue';
export default {
  components: {
    CustomForm,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const dataFields = computed(()=> JSON.parse(JSON.stringify(store.getters['customerStore/getFields'])))
    const createCustomer = async (dataFields) => {
      try {
        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("customerStore/saveCustomer", objectParams);
        router.push({name:'list-customers'})
      } catch (error) {
        console.log(error);
      }
    };

    return {
      dataFields,

      createCustomer,
    };
  },
}
</script>

<style>

</style>