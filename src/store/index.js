import { createStore } from 'vuex'
import productStore from '@/modules/products/store'
import customerStore from '@/modules/customers/store'
import categoryStore from '@/modules/categories/store'
import userStore from '@/modules/users/store'
import i18n from '@/i18n/store'

const store = createStore({
  state:{
    isDarkTheme: false
  },
  getters:{
    getTheme:(state)=>{
      return state.isDarkTheme
    }
  },
  mutations:{
    setTheme: (state, mode)=> {
      state.isDarkTheme = mode
    }
  },
  modules:{
    productStore,
    customerStore,
    categoryStore,
    userStore,
    i18n,
  }
})

export default store
