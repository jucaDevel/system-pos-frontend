<template>
  <h1>Crear Categoria</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="createUser" />
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
    const dataFields = computed(()=> JSON.parse(JSON.stringify(store.getters['userStore/getFields'])))
    const createUser = async (dataFields) => {
      try {
        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("userStore/saveUser", objectParams);
        router.push({name:'list-users'})
      } catch (error) {
        console.log(error);
      }
    };

    return {
      dataFields,

      createUser,
    };
  },
}
</script>

<style>

</style>