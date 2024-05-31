import { createStore } from 'vuex'
import productStore from '@/modules/products/store'

const store = createStore({
  modules:{
    productStore
  }
})

export default store
