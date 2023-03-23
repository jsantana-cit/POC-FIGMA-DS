import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as Figma from 'luisa-vue'
import design from './views/app.json'


Vue.config.productionTip = false


async function init () {
  // for live debuging use Figma.createFigmaDesignlets(<FileID>, <AccessKey>)
  await Figma.createFigmaDesignSystem(design)

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

init()
