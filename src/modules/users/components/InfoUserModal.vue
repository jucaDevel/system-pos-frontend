<template>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <span class="w-1/5">
            <font-awesome-icon :icon="['far', 'circle-user']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">Mi cuenta</p>
    </div>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <span class="w-1/5">
            <font-awesome-icon :icon="['fas', 'headset']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">Soporte</p>
    </div>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <span class="w-1/5">
            <font-awesome-icon :icon="['far', 'circle-user']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">Bloquear Pantalla</p>
    </div>
    <div class="flex justify-between cursor-pointer hover:bg-gray-200 p-2 rounded" @click="logout">
        <span class="w-1/5">
            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" size="md" class="text-secondary"/>
        </span>
        <p class="w-4/5 text-sm">Cerrar sesion</p>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            store.commit('authStore/logout')
            router.push({name:'login'})
        }

        return {
            logout
        }
    }
}
</script>

<style>

</style>