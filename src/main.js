import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// base de datos de firebase
  export const db = firebase.firestore();

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
