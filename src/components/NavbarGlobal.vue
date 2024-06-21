<template>
    <div class="relative" @on:clickMainContainer="onHandleInfoUser">
        <div class="w-full p-3 h-16 md:h-16 flex justify-between align-center shadow-lg dark:bg-secondaryDark">
            <div class="cursor-pointer flex-wrap content-center h-5">
                <font-awesome-icon :icon="['fas', 'bars']" size="2xl" class="text-secondary dark:text-gray-400" />
            </div>
            <div class="flex flex-wrap content-center gap-2 md:gap-5 lg:gap-5">
                <select
                class="hover:text-secondaryLight border-2 rounded p-2 dark:bg-secondaryDark dark:text-gray-300 dark:border-gray-400"
                @change="changeLocaleLanguage"
                v-model="language">
                    <option value="es">Español</option>
                    <option value="en">Ingles</option>
                </select>
                <div class="cursor-pointer flex flex-wrap content-center" @click="onChangeTheme">
                    <font-awesome-icon :icon="isDarkMode ?'fa-solid fa-sun':'fa-solid fa-moon'" size="2xl" class="text-secondary dark:text-gray-400" :title="t('common.THEME')"/>
                </div>
                <div class=" h-full flex justify-between mx-2 lg:mx-5" @click="onHandleInfoUser">
                    <img class="h-full rounded-full" alt="User Image" :src="urlImageUser">
                    <div class="mx-5 flex flex-wrap content-center md:gap-2 cursor-pointer hover:text-secondaryLight">
                        <span class="text-black dark:text-white">{{name}}</span>
                        <div>
                            <font-awesome-icon :icon="['fas', 'angle-down']" class="text-black dark:text-white" v-if="!openInfoUser"/>
                            <font-awesome-icon :icon="['fas', 'angle-up']" class="text-black dark:text-white" v-else/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-y right-5 w-40 bg-gray-50 rounded border-2 shadow-lg transition duration-500 ease-in-out" v-if="openInfoUser">
            <InfoUserModal/>
        </div>
    </div>
</template>

<script>
import {ref, watch, computed, defineAsyncComponent} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import noUserImage from '@/assets/images/no-user.png'

export default {
    components:{
        InfoUserModal: defineAsyncComponent(()=> import('@/modules/users/components/InfoUserModal.vue'))
    },
    props:{
        localeLanguage:{
            type: String,
            required: true
        },
        isDarkTheme:{
            type: Boolean,
            required: true
        }
    },
    setup(props, {emit}){
        const store = useStore()
        const isDarkMode = computed(()=>store.getters['getTheme'])
        const userLogged = computed(()=>store.getters['authStore/getUserLogged'])
        const { name, urlImage } = userLogged.value.user
        const openInfoUser = ref(false)
        const language = ref(props.localeLanguage)
        const {t} = useI18n()
        watch(
            ()=> props.localeLanguage,
            (newValue)=>{
                language.value = newValue
            }
        )
        const changeLocaleLanguage = () =>{
            emit('on:changeLanguage', language.value)
        }

        const onChangeTheme = () => {
            emit('on:changeTheme')
        }
        const onHandleInfoUser = () => {
            openInfoUser.value = !openInfoUser.value
        }
        return{
            isDarkMode,
            t,
            language,
            name, 
            urlImageUser: (urlImage !== '' ) ? urlImage : noUserImage,
            changeLocaleLanguage,
            onChangeTheme,
            openInfoUser,
            onHandleInfoUser

        }
    }
}
</script>