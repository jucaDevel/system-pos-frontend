<template>
    <router-link :to="{name:'detail-user'}">
        <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
            <span class="w-1/5">
                <font-awesome-icon :icon="['far', 'circle-user']" size="md" class="text-secondary"/>
            </span>
            <p class="w-4/5 text-sm">{{ languagei18n('users.MY_ACCOUNT') }}</p>
        </div>
    </router-link>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <span class="w-1/5">
            <font-awesome-icon :icon="['fas', 'headset']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">{{ languagei18n('users.SUPPORT') }}</p>
    </div>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <span class="w-1/5">
            <font-awesome-icon :icon="['fas', 'lock']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">{{ languagei18n('users.LOCK_SCREEN') }}</p>
    </div>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded" @click="logout">
        <span class="w-1/5">
            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">{{ languagei18n('users.LOGOUT') }}</p>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup(){
        const { t } = useI18n()
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            store.commit('authStore/logout')
            router.push({name:'login'})
        }

        return {
            logout,
            languagei18n: t
        }
    }
}
</script>

<style>

</style>