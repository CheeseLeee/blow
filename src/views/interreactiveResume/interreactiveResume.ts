import {onMounted,onBeforeUnmount,ref} from 'vue'
import {animate,scorllToward} from '../../utils/utils_fns/index'
export function useComDreamCycle(){
    const childWidtgref = ref()
    const childsWidth = ref()
    onMounted(() => {
        const w = childWidtgref.value.clientWidth
        childsWidth.value = w 
        window.addEventListener('beforeunload',e => {
            window.scrollTo(0,0)
            console.log('啥啊这啥')
        })
    })
    return {
        childWidtgref,childsWidth
    }
}

export function useAnimateAndScroll(){
    const eyesLeft = ref(90)
    const startScroll = ref(false)
    const scrollViweTranslateX = ref(0)
    let animateEl:any = null
    onMounted(() => {
        animateEl= document.getElementById('animate')
        window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    function handleScroll(e:any){
        startScroll.value = true
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        const h = window.innerWidth * 4 - window.innerHeight
        const w = window.innerWidth * 3
        scrollViweTranslateX.value =  -scrollHeight * ( w / h )
        const {t} = scorllToward(scrollHeight)
        //case:scroll down
        if(t){     
            animate(animateEl)
            eyesLeft.value = 90
        //case:scroll up            
        }else{
            animate(animateEl,'left')
            eyesLeft.value = 55
        } 
    }
    return {
        eyesLeft,startScroll,scrollViweTranslateX
    }
}