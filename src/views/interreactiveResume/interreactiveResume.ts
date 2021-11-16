import {onMounted,onBeforeUnmount,ref} from 'vue'
import {scorllToward} from '../../utils/utils_fns/index'
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

    const scrollViewHeight = ref('100%') 
    let animateEl:any = null 
    let preScrollTop = 0 
    let animate:Animate //人物对象
    let scrollView:any
    let jumpScrollHeight = 0 //滚动条到何处时触发跳跃动画
    let downScrollHeight = 0 //滚动条到何处时触发跳跃动画
    let jumpScrollHeight2 = 0 //滚动条到何处时触发跳跃动画
    let downScrollHeight2 = 0 //滚动条到何处时触发跳跃动画
    let goSeaScrollHeight = 0 //第二阶段 入海点
    let goSeaKey = false
    let winWidthHelf:number
    const seaTop = ref()

    onMounted(() => {
        winWidthHelf = window.innerWidth / 2
        animateEl = document.getElementById('animate')
        scrollView =  document.getElementsByClassName('life-scroll-view')[0]
        window.addEventListener('scroll', handleScroll)
        animate = new Animate(animateEl)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    function handleScroll(e:any){
       // scrollView.classList.remove("heightQueit")
        startScroll.value = true
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollHeight)
        //跳跃点 = 跳跃点（人物） - 人物距离左侧屏幕距离 - 人物宽度 - 左侧方块宽度 - 屏幕宽度的一半 + 剧中偏移100
        jumpScrollHeight = 7370 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        jumpScrollHeight2 = 10362 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        //跳跃点 = 跳跃点（人物） - 人物距离左侧屏幕距离 - 左侧方块宽度 - 屏幕宽度的一半 
        downScrollHeight = 8000 - animateEl.offsetLeft  - 20 - winWidthHelf 
        downScrollHeight2 = 11016 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        //跳跃点 入海
        goSeaScrollHeight = 14786 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        console.log('swim',goSeaScrollHeight)
        scrollViweTranslateX.value =  -scrollHeight / 2
        const {t} = scorllToward(scrollHeight)
        //case:scroll down
        preScrollTop = scrollHeight
        //第一阶段完成，第二阶段入海开始
        if(scrollHeight > goSeaScrollHeight){
            window.removeEventListener('scroll', handleScroll)
            window.addEventListener('scroll', handleSeaViewScroll)
            return
        }
        //滚动方向判断
        if(t){  
            const down1 = scrollHeight > downScrollHeight 
            const jump1 = scrollHeight > jumpScrollHeight 
            const down2 = scrollHeight > downScrollHeight2 
            const jump2 = scrollHeight > jumpScrollHeight2 
            //第一个跳跃地
            if(scrollHeight < 7800){
                if(down1){
                    animate.jumpDown('right')
                }else if(jump1){
                    animate.jumpUp('right')                  
                }
            }
            //第二个跳跃地
            if(scrollHeight > 7800){                
                if(down2){
                    animate.jumpDown('right')
                }else if(jump2){
                    animate.jumpUp('right')
                }
            }

            animate.run('right')
            eyesLeft.value = 90          
        //case:scroll up            
        }else{
            //第一个跳跃地
            if(scrollHeight < 7800){
                if(scrollHeight < jumpScrollHeight ){
                    animate.jumpDown('left')

                }else if(scrollHeight < downScrollHeight ){

                    animate.jumpUp('left')
                }
            }
            //第二个跳跃地
            if(scrollHeight > 7800){
                if(scrollHeight < jumpScrollHeight2 ){
                    animate.jumpDown('left')
                }else if(scrollHeight < downScrollHeight2 ){                  
                    animate.jumpUp('left')
                }
            }
            animate.run('left')
            eyesLeft.value = 55
        } 
    }
    function handleSeaViewScroll(){
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        const {t} = scorllToward(scrollHeight)
        scrollViweTranslateX.value =  -scrollHeight / 2
        if(t){
            
            if(scrollHeight > goSeaScrollHeight){
                console.log('sea')
                scrollViewHeight.value = '0'      
                goSeaKey = true
                animate.swim('right')
            }
            eyesLeft.value = 90  
        }else{ 
            
            if(scrollHeight > goSeaScrollHeight){
                animate.swim('left')
            }
            if(scrollHeight < goSeaScrollHeight && goSeaKey){
                console.log('sea')
                scrollViewHeight.value = '100%'
                //scrollView.classList.add("heightQueit")
                window.removeEventListener('scroll', handleSeaViewScroll)      
                window.addEventListener('scroll', handleScroll)
            }
            console.log('sea--')
            eyesLeft.value = 55
        }
        preScrollTop = scrollHeight
    }
    return {
        eyesLeft,startScroll,scrollViweTranslateX,scrollViewHeight,seaTop
    }
}