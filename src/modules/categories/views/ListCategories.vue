<template>
  <LoaderProgress v-if="isLoading"/>
  <template v-else>
    <data-table
      :allValues="categories"
      :allKeys="allKeys"
      @on:updateRegister="updateCategory"
      @on:deleteRegister="deleteCategory"
      >
      <template v-slot:title>
        <h4 class="font-semibold text-lg">{{languagei18n('categories.TITLE')}}</h4>
      </template>
      <template v-slot:button-create>
        <button
          class="bg-primary p-2 rounded text-white dark:bg-primaryDark"
          @click="openModalCategory"
        >
          {{languagei18n('categories.BTN_CREATE')}}
        </button>
      </template>
    </data-table>
  </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
import getKeysFromArray from '@/utils/helpers/getKeysFromArray'
import dataFields from "@/utils/fieldsCategory";
import { useI18n } from 'vue-i18n'
import useGestor from '@/utils/composables/useGestor'
export default {
  components: {
    DataTable: defineAsyncComponent(()=> import('@/components/DataTable.vue')),
    LoaderProgress: defineAsyncComponent(() => import('@/components/LoaderProgress'))
  },
  setup(){
    const {t} = useI18n()
    // const store = useStore()
    const router = useRouter()
    const allKeys = getKeysFromArray(dataFields)

    const {
      updateRegister,
      deleteRegister,

      dataValues:categories,
      isLoading
    } = useGestor({
      pathSetValues:'categoryStore/setCategories',
      pathSetFields:'categoryStore/setFields',
      dataFields,
      pathGetValues:'categoryStore/getCategories',
      pathToUpdate:'update-category',
      pathDelete:'categoryStore/deleteCategory'
    })
    
    return{
        languagei18n: t,

        openModalCategory: () => { router.push({name:'creation-category'}) },
        updateCategory: updateRegister,
        deleteCategory: deleteRegister,

        categories,
        allKeys,
        isLoading
    }
  }
}
</script>

<style>

</style>