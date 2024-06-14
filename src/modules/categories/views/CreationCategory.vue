<template>
  <h1>Crear Categoria</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="createCategory" />
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
    const dataFields = computed(()=> JSON.parse(JSON.stringify(store.getters['categoryStore/getFields'])))
    const createCategory = async (dataFields) => {
      try {
        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("categoryStore/saveCategory", objectParams);
        router.push({name:'list-categories'})
      } catch (error) {
        console.log(error);
      }
    };

    return {
      dataFields,

      createCategory,
    };
  },
}
</script>

<style>

</style>