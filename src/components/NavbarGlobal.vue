<template>
    <div class="w-full p-3 h-16 md:h-16 flex justify-between align-center shadow-lg">
        <div class="cursor-pointer flex-wrap content-center h-5">
            <font-awesome-icon :icon="['fas', 'bars']" size="2xl" style="color: #024873;" />
        </div>
        <div class="flex flex-wrap content-center gap-2 md:gap-5 lg:gap-5">
            <select
              class="hover:text-secondaryLight border-2 rounded p-2"
              @change="changeLocaleLanguage"
              v-model="language">
                <option value="es">Español</option>
                <option value="en">Ingles</option>
            </select>
            <div class="cursor-pointer flex flex-wrap content-center">
                <font-awesome-icon :icon="['fas', 'moon']" size="2xl" class="text-secondary" :title="t('common.THEME')"/>
            </div>
            <div class=" h-full flex justify-between mx-2 lg:mx-5">
                <img class="h-full rounded-full" alt="User Image" src="@/assets/images/no-user.png">
                <div class="mx-5 flex flex-wrap content-center md:gap-2 cursor-pointer hover:text-secondaryLight">
                    <span>Juan</span>
                    <div>
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, watch} from 'vue'
import { useI18n } from 'vue-i18n'
export default {
    props:{
        localeLanguage:{
            type: String,
            required: true
        }
    },
    setup(props, {emit}){
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
        return{
            t,
            language,
            changeLocaleLanguage
        }
    }
}
</script>