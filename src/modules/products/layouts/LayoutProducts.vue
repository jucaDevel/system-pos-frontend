<template>
    <div class="flex flex-row items-left mb-3 py-5 w-full justify-between">
        <ButtonBackCustom />
        <div class="flex flex-row gap-3 justify-start items-center">
            <h1>Gestores > Productos </h1>
        </div>
    </div>
    <div class="rounded-lg border-2 px-4 border-gray-200 shadow-sm w-full h-full flex flex-col justify-around">
        <router-view></router-view>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import ButtonBackCustom from '@/components/ButtonBackCustom.vue'
export default {
    components:{
        ButtonBackCustom
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