/*
 * @Author: zhaoshan
 * @Date: 2022-11-21 19:49:18
 * @LastEditTime: 2022-11-21 20:01:48
 * @LastEditors: zhaoshan
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false


Vue.use(dataV)

new Vue({
  render: h => h(App),
}).$mount('#app')
