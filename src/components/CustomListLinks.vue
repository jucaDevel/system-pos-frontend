<template>
    <div class="hover:text-neutralLight active:text-primary" v-for="link in listLinks" :key="link.to">
        <router-link class="text-lg flex gap-6 flex-wrap content-center" v-slot="{isActive}" :to="{name:link.to}">
            <font-awesome-icon :icon="[link.icon[0], link.icon[1]]" size="lg" :class="isActive ? 'active-link':''" />
            <a :class="isActive ? 'active-link':''">{{link.name}}</a>
        </router-link>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import useLanguage from '@/utils/composables/useLanguage'
export default {
    setup(){
       const { languageChanged, getCurrentLanguage } = useLanguage()
        const listLinks =  ref([])

        watch(
            ()=> languageChanged.value,
            () => {
                const languagei18n = getCurrentLanguage()
                listLinks.value = [
                    {
                        to:'home',
                        name:languagei18n('modules.DASHBOARD'),
                        icon:['fas','chart-line']
                    },
                    {
                        to:'products',
                        name:languagei18n('modules.PRODUCTS'),
                        icon:['fas','table-list']
                    },
                    {
                        to:'customers',
                        name:languagei18n('modules.CUSTOMERS'),
                        icon:['fas','users']
                    },
                    {
                        to:'categories',
                        name:languagei18n('modules.CATEGORIES'),
                        icon:['fas','list']
                    },
                    {
                        to:'users',
                        name:languagei18n('modules.USERS'),
                        icon:['fas','user']
                    },
                ]   
            },
            { immediate: true }
        )
        return{
            listLinks
        }
    }
}
</script>

<style>

</style>