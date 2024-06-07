<template>
  <div class="flex h-screen overflow-hidden">
    <SideBarGlobal class="hidden md:w-1/6 md:block"/>
    <div class="flex flex-col w-full md:w-5/6">
      <NavbarGlobal :localeLanguage="localeLanguage" @on:changeLanguage="setLanguage" />
      <div class="flex-grow p-2 flex flex-col items-center justify-start overflow-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import NavbarGlobal from '@/components/NavbarGlobal'
import SideBarGlobal from '@/components/SideBarGlobal'
export default {
    name:'App',
    components:{
      NavbarGlobal,
      SideBarGlobal
    },
    setup(){
        const store = useStore()
        const {locale, t} = useI18n()
        const localeLanguage = ref(store.getters['i18n/locale'])
        watch(
            () => store.getters['i18n/locale'],
            (newLocale) => {
                locale.value = newLocale;
            },
        );

        const setLanguage = (newLanguage) => {
          localeLanguage.value = newLanguage
          store.dispatch('i18n/setLocale', localeLanguage.value);
        };

        return{
            localeLanguage,
            t,
            setLanguage
        }
    }
  }
</script>
