<template>
    <div class="flex flex-row gap-3 justify-start items-center px-5">
        <button @click="goBack">
            <font-awesome-icon
              :icon="['fas', 'chevron-left']"
              size="xl"
              class="text-secondary cursor-pointer dark:text-gray-400"
              :title="languagei18n('common.GO_BACK_SENTECE')" />
        </button>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import {useRouter} from 'vue-router'
export default {
    setup(){
        const { t:languagei18n } = useI18n()
        const router = useRouter()
        return{
            languagei18n,
            goBack: () => { router.go(-1) }
        }
    }
}
</script>

<style>

</style>