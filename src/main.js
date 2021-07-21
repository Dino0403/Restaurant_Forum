// main.js 為整個專案的載入點
// npm run serve 時會先讀取此檔案
// $mount : 內容透過 vue 產生，並將內容灌到 #app 中

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
