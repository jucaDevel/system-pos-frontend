<template>
  <LoaderProgress v-if="isLoading"/>
  <template v-else>
    <div class="rounded-lg border-2 px-4 border-gray-200 dark:border-gray-600 shadow-sm w-full h-full flex flex-col justify-around">
      <data-table
        :allValues="products"
        :allKeys="allKeys"
        @on:updateRegister="updateProduct"
        @on:deleteRegister="deleteProduct"
        >
        <template v-slot:title>
          <h4 class="font-semibold text-lg">{{languagei18n('products.TITLE')}}</h4>
        </template>
        <template v-slot:button-create>
          <button
            class="bg-primary p-2 rounded text-white dark:bg-primaryDark"
            @click="openModalProduct"
          >
            {{languagei18n('products.BTN_CREATE')}}
          </button>
        </template>
      </data-table>
    </div>
  </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
import getKeysFromArray from '@/utils/helpers/getKeysFromArray'
import dataFields from "@/utils/fields";
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

      dataValues:products,
      isLoading
    } = useGestor({
      pathSetValues:'productStore/setProducts',
      pathSetFields:'productStore/setFields',
      dataFields,
      pathGetValues:'productStore/getProducts',
      pathToUpdate:'update-product',
      pathDelete:'productStore/deleteProduct'
    })
    
    return{
      languagei18n: t,

      openModalProduct: () => { router.push({name:'creation-product'}) },
      updateProduct:updateRegister,
      deleteProduct:deleteRegister,

      products,
      allKeys,
      isLoading
    }
  }
};
</script>