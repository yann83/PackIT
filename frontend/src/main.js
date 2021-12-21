import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Imporation de Fonts Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Importation de Vue Routes
import VueRouter from 'vue-router'
import Routes from './Routes'

//Utilisation de Fonts Awesome
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

//Utilisation des Routes
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history' // remplace http://localhost:8080/#/Pages1 par http://localhost:8080/Pages1
})

new Vue({
  render: h => h(App),
  router: router //Ajout des Routes
}).$mount('#app')
