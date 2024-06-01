import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/style.css'
import './style/output.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**Icons */
import { faBars, faMoon, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faMoon, faAngleDown)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
