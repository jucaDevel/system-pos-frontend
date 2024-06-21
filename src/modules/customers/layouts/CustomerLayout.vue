<template>
    <NavbarBack />    
    <router-view></router-view>
</template>

<script>
import { useI18n } from 'vue-i18n'
import NavbarBack from '@/components/NavbarBack.vue'
export default {
    components:{
        NavbarBack
    },
    setup(){
        const { t } = useI18n()

        return{
            languagei18n: t
        }
    }
}
</script>

<style>

</style>