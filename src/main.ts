import { createApp,  } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import 'element-plus/dist/index.css'
import { eleComponents, eleplugins } from '../src/elementUi/elementPlus'
import './iconfont/font_2896618_qi97kyhkq3p/iconfont.css'
import {globalDirectives} from './utils/global_directive/index'
import {loading} from './plugins/index'
const app = createApp(App)
eleComponents.forEach(eleComponents => {
    app.component(eleComponents.name, eleComponents)
  })
eleplugins.forEach(plugin => {
    app.use(plugin)
})
for(const i of globalDirectives){
    app.directive(i.name,i.cycle)
}


app.use(store).use(router).use(loading).mount('#app')
