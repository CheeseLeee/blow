import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import 'element-plus/dist/index.css'
import { eleComponents, plugins } from '../src/elementUi/elementPlus'
import './iconfont/font_2896618_qi97kyhkq3p/iconfont.css'


const app = createApp(App)
eleComponents.forEach(eleComponents => {
    app.component(eleComponents.name, eleComponents)
  })
plugins.forEach(plugin => {
app.use(plugin)
})
//默认input聚焦
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
//夜间样式修改背景图
app.directive('bgi',{
    mounted(el,imgUrl){
        const myDate = new Date()
        const nowHours = myDate.getHours()
        if(nowHours >= 20){
            //传入参数imgUrl必须是/assets下的png格式图片
            el.style.backgroundImage = `url(${require('@/assets/'+imgUrl.value+'.png')})` 
        }
    }
})


const changeOpacity = (el?:any) => {
    console.log(el)
    return function ($event?:any){
        console.log($event,el)
        const scrollTop = document.documentElement.scrollTop  | document.body.scrollTop
        if(scrollTop !== 0){
            el.style.opacity = 1000/scrollTop * 0.02 > 0.1 ? 1000/scrollTop * 0.02  : 0
        }else{
            el.style.opacity = 1
        }
    }
}
//滚动修改透明度
app.directive('opDepOn',{
    mounted(el){
        //let preScrollTop = 0
        window.addEventListener('scroll',changeOpacity(el))
    },
    beforeUnmount(){
        window.removeEventListener('scroll',changeOpacity())
    }
})
app.use(store).use(router).mount('#app')
