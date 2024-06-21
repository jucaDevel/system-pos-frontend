import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import './style/style.css'
import './style/output.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**Icons */
import {
  faBars,
  faMoon,
  faAngleDown,
  faAngleUp,
  faChartLine,
  faTableList,
  faFilter,
  faBan,
  faPenToSquare,
  faFileCsv,
  faDownload,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronLeft,
  faSun,
  faUsers,
  faList,
  faUser,
  faAt,
  faLock,
  faHeadset,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { faFileExcel, faFilePdf, faCircleLeft, faCircleXmark, faEye, faCircleUser, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

library.add(
  faBars,
  faMoon,
  faAngleDown,
  faChartLine,
  faTableList,
  faFilter,
  faBan,
  faPenToSquare,
  faFileExcel,
  faFilePdf,
  faFileCsv,
  faDownload,
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircleLeft,
  faSun,
  faCircleXmark,
  faUsers,
  faList,
  faUser,
  faAt,
  faLock,
  faEye,
  faCircleUser,
  faHeadset,
  faArrowRightFromBracket,
  faAngleUp,
  faEyeSlash,
  faChevronLeft
);


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(i18n)
    .use(router)
    .mount('#app')
