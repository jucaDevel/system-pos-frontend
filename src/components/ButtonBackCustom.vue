<template>
    <div class="flex flex-row gap-3 justify-start items-center">
        <button @click="goBack">
            <font-awesome-icon
              :icon="['far', 'circle-left']"
              size="2xl"
              class="text-secondary cursor-pointer dark:text-gray-400"
              :title="languagei18n('common.GO_BACK_SENTECE')" />
        </button>
        <h1 class="dark:text-gray-300">{{languagei18n('common.GO_BACK_SENTECE')}}</h1>
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