import {onMounted,onBeforeUnmount,ref} from 'vue'
import {animate,scorllToward,animateTowardUp,animateTowardDown} from '../../utils/utils_fns/index'
import {Animate} from '../../utils/utils_fns/animate'
export function useComDreamCycle(){
    const childWidtgref = ref()
    const childsWidth = ref()
    onMounted(() => {
        const w = childWidtgref.value.clientWidth
        childsWidth.value = w 
        window.addEventListener('beforeunload',e => {
            window.scrollTo(0,0)

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
    let preScrollTop:any = 0
    let animate:any 
    //let jumpKey:any = false
    onMounted(() => {
        animateEl= document.getElementById('animate')
        window.addEventListener('scroll', handleScroll)
        animate = new Animate(animateEl)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    function handleScroll(e:any){
        startScroll.value = true
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        const gap = scrollHeight - preScrollTop
        console.log('gap',gap)
/*         const h = window.innerWidth * 4 - window.innerHeight
        const w = window.innerWidth * 3 */
        scrollViweTranslateX.value =  -scrollHeight / 2
        const {t} = scorllToward(scrollHeight)
        //case:scroll down
  
        preScrollTop = scrollHeight
        if(t){     
            //console.log(jumpKey)
            if(scrollHeight > 7100 &&  scrollHeight < 7290){
                //jumpKey = true

                    animateTowardUp(animateEl,'right',scrollHeight)
         
                //console.log(jumpKey)
                return
            }
            if(scrollHeight > 7880 && scrollHeight < 7990){
                animateTowardDown(animateEl,'right')
                return
            }
            animate.step('right')
                //animate(animateEl)
                eyesLeft.value = 90
            
        
        //case:scroll up            
        }else{
/*             if(scrollHeight < 7800 && jumpKey === false){
                animateTowardUp(animateEl,'left')
                jumpKey = true
                return
            }
            if(scrollHeight < 7100 && jumpKey === true){
                console.log("jump")
                animateTowardDown(animateEl,'left')
                jumpKey = false
                return                
            } */
            animate.step('left')
            eyesLeft.value = 55
        } 
    }
    return {
        eyesLeft,startScroll,scrollViweTranslateX
    }
}