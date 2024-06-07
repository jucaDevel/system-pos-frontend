<template>
  <div v-if="isLoading">
    <h1>Cargando...</h1>
  </div>
  <template v-else>
    <data-table :allValues="products" :allKeys="allKeys">
      <template v-slot:title>
        <h4 class="font-semibold text-lg">{{languagei18n('products.TITLE')}}</h4>
      </template>
      <template v-slot:button-create>
        <button
          class="bg-primary p-2 rounded text-white"
          @click="openModalProduct"
        >
          {{languagei18n('products.BTN_CREATE')}}
        </button>
      </template>
    </data-table>
  </template>
</template>

<script>
import { onMounted, watch, ref, defineAsyncComponent } from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import getKeysFromArray from '@/utils/helpers/getKeysFromArray'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    DataTable: defineAsyncComponent(()=> import('@/components/DataTable.vue'))
  },
  setup(){
    const {t} = useI18n()
    const store = useStore()
    const router = useRouter()
    const products = ref([])
    const allKeys = ref([])
    const isLoading = ref(true)
    const getProducts = async () => {
        await store.dispatch('productStore/setProducts')
        products.value = store.getters['productStore/getProducts']
    }
    onMounted(() => {
      getProducts()
    })

    watch(products,(newProducts) => {
      if (newProducts.length) {
        allKeys.value = getKeysFromArray(...products.value)
        isLoading.value = false
      }
    }, { immediate: true })
    return{
        languagei18n: t,

        openModalProduct: () => { router.push({name:'creation-product'}) },

        products,
        allKeys,
        isLoading
    }
  }
};
</script>

<style>
</style>