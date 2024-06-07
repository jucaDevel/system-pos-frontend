import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

const useLanguage = () => {
    const store = useStore()
    const { t:languagei18n } = useI18n()
    const languageChanged = ref(false); 
    watch(
        () => store.getters['i18n/locale'],
        () => {
            languageChanged.value = !languageChanged.value
        },
        { immediate: true }
    )

    return {
        getCurrentLanguage: () => languagei18n,
        languageChanged
    }
}

export default useLanguage