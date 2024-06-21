<template>
    <router-view></router-view>
</template>

<script>
import {computed, onMounted, ref, watch} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
// import NavbarGlobal from '@/components/NavbarGlobal'
// import SideBarGlobal from '@/components/SideBarGlobal'
export default {
    name:'App',
    components:{
      // NavbarGlobal,
      // SideBarGlobal
    },
    setup(){
        const isDarkTheme = computed(()=>store.getters['getTheme'])
        const store = useStore()
        const {locale, t} = useI18n()
        const localeLanguage = ref(store.getters['i18n/locale'])
        watch(
            () => store.getters['i18n/locale'],
            (newLocale) => {
                locale.value = newLocale;
            },
        )

        const setLanguage = (newLanguage) => {
          localeLanguage.value = newLanguage
          store.dispatch('i18n/setLocale', localeLanguage.value);
        }

        const changeTheme = () => {
          store.commit('setTheme',!isDarkTheme.value)
        }

        onMounted(()=>{
          const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
          store.commit('setTheme',isSystemDarkMode)
        })

        return{
            isDarkTheme,
            localeLanguage,
            t,
            setLanguage,
            changeTheme
        }
    }
  }
</script>
