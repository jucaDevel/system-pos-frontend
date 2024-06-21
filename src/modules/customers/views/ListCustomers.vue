<template>
  <LoaderProgress v-if="isLoading"/>
  <template v-else>
    <div class="rounded-lg border-2 px-4 border-gray-200 dark:border-gray-600 shadow-sm w-full h-full flex flex-col justify-around">
      <data-table
        :allValues="customers"
        :allKeys="allKeys"
        @on:updateRegister="updateCustomer"
        @on:deleteRegister="deleteCustomer"
        >
        <template v-slot:title>
          <h4 class="font-semibold text-lg">{{languagei18n('customers.TITLE')}}</h4>
        </template>
        <template v-slot:button-create>
          <button
            class="bg-primary p-2 rounded text-white dark:bg-primaryDark"
            @click="openModalCustomer"
          >
            {{languagei18n('customers.BTN_CREATE')}}
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
import dataFields from "@/utils/fieldsCustomer";
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

      dataValues:customers,
      isLoading
    } = useGestor({
      pathSetValues:'customerStore/setCustomers',
      pathSetFields:'customerStore/setFields',
      dataFields,
      pathGetValues:'customerStore/getCustomers',
      pathToUpdate:'update-customer',
      pathDelete:'customerStore/deleteCustomer'
    })
    
    return{
        languagei18n: t,

        openModalCustomer: () => { router.push({name:'creation-customer'}) },
        updateCustomer: updateRegister,
        deleteCustomer: deleteRegister,

        customers,
        allKeys,
        isLoading
    }
  }
}
</script>

<style>

</style>