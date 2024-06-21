<template>
    <ul class="flex flex-col gap-2">    
        <li class="" v-for="linkGroup in linkGroups" :key="linkGroup.id">
            <ul>
                <div class="cursor-pointer hover:text-neutralLight" @click="showChildrenLinks(linkGroup.id)">                    
                    <span class="text-lg text-center">{{linkGroup.moduleName}}</span>
                </div>
                <div class="flex flex-col gap-2 pb-3" v-if="linkGroup.isChildrenVisible">    
                    <li v-for="link in linkGroup.children" :key="link.to">    
                        <router-link
                        class="hover:text-neutralLight active:text-primary text-md flex gap-3 flex-wrap content-center flex-row items-center pl-5"
                        v-slot="{isActive}"
                        :to="{name:link.to}">
                            <font-awesome-icon :icon="[link.icon[0], link.icon[1]]" size="sm" :class="isActive ? 'active-link':''" />
                            <a :class="isActive ? 'active-link':''">{{link.name}}</a>
                        </router-link>
                    </li>
                </div>
            </ul>
        </li>
    </ul>
</template>

<script>
import { ref, watch } from 'vue'
import useLanguage from '@/utils/composables/useLanguage'
export default {
    setup(){
       const { languageChanged, getCurrentLanguage } = useLanguage()
        const linkGroups =  ref([])

        watch(
            ()=> languageChanged.value,
            () => {
                const languagei18n = getCurrentLanguage()
                linkGroups.value = [
                    {
                        id:'dashboard',
                        moduleName: 'Dashboards',
                        children: [
                            {
                                to:'home',
                                name:languagei18n('modules.DASHBOARD'),
                                icon:['fas','chart-line']
                            },
                        ],
                        isChildrenVisible: false
                    },
                    {
                        id:'gestor',
                        moduleName: 'Gestores',
                        children: [
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
                        ],
                        isChildrenVisible: false
                    },
                ]   
            },
            { immediate: true }
        )

        const showChildrenLinks = (idLinkGroup) => {
            linkGroups.value.forEach((group) => {
                if(group.id === idLinkGroup){
                    group.isChildrenVisible = !group.isChildrenVisible
                }
            })
        }

        return{
            linkGroups,
            showChildrenLinks
        }
    }
}
</script>

<style>

</style>