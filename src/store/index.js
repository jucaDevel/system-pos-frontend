import { createStore } from 'vuex'
import productStore from '@/modules/products/store'
import i18n from '@/i18n/store'

const store = createStore({
  modules:{
    productStore,
    i18n
  }
})

export default store
