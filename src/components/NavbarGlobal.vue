<template>
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
            <div class=" h-full flex justify-between mx-2 lg:mx-5">
                <img class="h-full rounded-full" alt="User Image" src="@/assets/images/no-user.png">
                <div class="mx-5 flex flex-wrap content-center md:gap-2 cursor-pointer hover:text-secondaryLight">
                    <span class="text-black dark:text-white">Juan</span>
                    <div>
                        <font-awesome-icon :icon="['fas', 'angle-down']" class="text-black dark:text-white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, watch, computed} from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
export default {
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
        return{
            isDarkMode,
            t,
            language,
            changeLocaleLanguage,
            onChangeTheme
        }
    }
}
</script>