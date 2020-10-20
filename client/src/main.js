import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'

createApp(App).use(store).use(router).mount('#app');

//load the token from localStorage
/*
Vue.config.productionTip=false

//settup up default vue http modules for api calls
Vue.prototype.$http=axios;
//load token
const token = localStorage.getItem("token");
//if there is any token we will append default axios authorizatioon headers
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorizatioon']=token;
}
*/

/*new Vue({
  router,
  store,
  render: h=>h(App)
}).mount('app')*/
