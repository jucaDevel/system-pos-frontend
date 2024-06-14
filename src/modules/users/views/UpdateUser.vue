<template>
  <h1>Actualizar producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="updateUser" v-if="isLoaded"/>
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
    const dataFields = ref((store.getters['userStore/getFields'].length > 0)?JSON.parse(JSON.stringify(store.getters['userStore/getFields'])):[])
    const isLoaded = ref(false)
    const idUser = route.params.id

    const getUserById = () => {
      const dataUser = store.getters['userStore/getUserById'](idUser)
      const keys = Object.keys(dataUser)
      if(dataFields.value.length > 0){
        Object.values(dataFields.value).forEach((field) => {
            if(keys.includes(field.name)){
                field['value'] = dataUser[field.name]
            }
        })

        isLoaded.value = true
      }
    }

    const updateUser = async (dataFields) => {
      try {

        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("userStore/updateUser", { idUser, data: objectParams });
        router.push({name:'list-users'})
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getUserById()
    })

    return {
      dataFields,
      isLoaded,

      updateUser,
    };
  },
};
</script>

<style>

</style>