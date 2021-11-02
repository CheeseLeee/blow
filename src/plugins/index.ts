import { h ,render } from 'vue'
import Loading from '../components/public/loading/Loading.vue'

export const loading = {    
    install: (app:any, options:any) => {
        console.log(options)
        const show = function(){
            console.log('???')
            const c = document.createElement('div')
            const hellow = h(
                Loading,

            )
            console.log(hellow)
            render(hellow,c)
            console.log(c.childNodes)
            document.body.appendChild(c)
        }
        app.provide('show', show)
    }
    
}