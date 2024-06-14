<template>
  <h1>Actualizar producto</h1>
  <div class="block h-80 w-full overflow-y-auto">
    <CustomForm :dataFields="dataFields" @on:saveRegister="updateCategory" v-if="isLoaded"/>
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
    const dataFields = ref((store.getters['categoryStore/getFields'].length > 0)?JSON.parse(JSON.stringify(store.getters['categoryStore/getFields'])):[])
    const isLoaded = ref(false)
    const idCategory = route.params.id

    const getCategoryById = () => {
      const dataCategory = store.getters['categoryStore/getCategoryById'](idCategory)
      const keys = Object.keys(dataCategory)
      if(dataFields.value.length > 0){
        Object.values(dataFields.value).forEach((field) => {
            if(keys.includes(field.name)){
                field['value'] = dataCategory[field.name]
            }
        })

        isLoaded.value = true
      }
    }

    const updateCategory = async (dataFields) => {
      try {

        const objectParams = {
          ...dataFields,
          status: 1,
        };

        await store.dispatch("categoryStore/updateCategory", { idCategory, data: objectParams });
        router.push({name:'list-categories'})
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getCategoryById()
    })

    return {
      dataFields,
      isLoaded,

      updateCategory,
    };
  },
};
</script>

<style>

</style>