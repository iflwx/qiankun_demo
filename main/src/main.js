import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'tools',
    entry: '//localhost:50001',
    container: '#subapp',
    activeRule: '/tools'
  }
])

setDefaultMountApp('/tools')

start()
