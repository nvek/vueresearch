import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export

// todo Для визуализации использовать vuetify. !!
// todo Отобразить/дать возможность изменять тестовые данные из vuex
// todo Выложить приложение на git

import "bootswatch/dist/cosmo/bootstrap.min.css";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
