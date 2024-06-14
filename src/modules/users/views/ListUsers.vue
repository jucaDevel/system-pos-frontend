<template>
  <LoaderProgress v-if="isLoading"/>
  <template v-else>
    <data-table
      :allValues="users"
      :allKeys="allKeys"
      @on:updateRegister="updateUser"
      @on:deleteRegister="deleteUser"
      >
      <template v-slot:title>
        <h4 class="font-semibold text-lg">{{languagei18n('users.TITLE')}}</h4>
      </template>
      <template v-slot:button-create>
        <button
          class="bg-primary p-2 rounded text-white dark:bg-primaryDark"
          @click="openModalUser"
        >
          {{languagei18n('users.BTN_CREATE')}}
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
import dataFields from "@/utils/fieldsUsers";
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

      dataValues:users,
      isLoading
    } = useGestor({
      pathSetValues:'userStore/setUsers',
      pathSetFields:'userStore/setFields',
      dataFields,
      pathGetValues:'userStore/getUsers',
      pathToUpdate:'update-user',
      pathDelete:'userStore/deleteUser'
    })
    
    return{
        languagei18n: t,

        openModalUser: () => { router.push({name:'creation-user'}) },
        updateUser: updateRegister,
        deleteUser: deleteRegister,

        users,
        allKeys,
        isLoading
    }
  }
}
</script>

<style>

</style>