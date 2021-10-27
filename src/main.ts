import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import 'element-plus/dist/index.css'
import { eleComponents, plugins } from '../src/elementUi/elementPlus'
import './iconfont/iconfont.css'

const app = createApp(App)
eleComponents.forEach(eleComponents => {
    app.component(eleComponents.name, eleComponents)
  })
  plugins.forEach(plugin => {
    app.use(plugin)
  })
app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el) {
    // 聚焦元素
        el.focus()
    }
})
//夜间样式修改背景图
app.directive('styleDepOn',{
    mounted(el){
        const myDate = new Date()
        const nowHours = myDate.getHours()
        if(nowHours > 20){
            el.style.backgroundImage = "url('./assets/logo.png')"
        }
    }
})
app.use(store).use(router).mount('#app')
