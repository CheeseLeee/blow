import {onMounted,onBeforeUnmount,ref,reactive} from 'vue'
import {scorllToward,getRandomInt} from '../../utils/utils_fns/index'
import {Animate} from '../../utils/utils_fns/animate'
export function useComDreamCycle(){
    const childWidtgref = ref()
    const childsWidth = ref()
    onMounted(() => {
        const w = childWidtgref.value.clientWidth
        childsWidth.value = w 
        window.addEventListener('beforeunload',() => {
            window.scrollTo(0,0)
        })
    })
    return {
        childWidtgref,childsWidth
    }
}

export function useRandomBubble(){
    const bubbleIsShow = ref(true)
    const bubbleMoved = ref(false)
    const bubbles:string[] = reactive([])
    const randonBubbles = setInterval(() => {
        bubbleIsShow.value = true
        bubbleMoved.value = false
        bubbles.length = 0
        const int = getRandomInt(1,6)
            for(let i = 1 ; i < int ; i++){
                const left = getRandomInt(1,3300)
                
                bubbles.push(left + '')

            }
               setTimeout(() => {

                bubbleMoved.value = true
                    setTimeout(() => {
                        bubbleIsShow.value = false
                    },3000)
                },1000)
    },6000)
    onBeforeUnmount(() => {
        clearInterval(randonBubbles)
    })
    return {
        bubbleIsShow,bubbleMoved,bubbles
    }
}

export function eyesOpenOrClose(){
    const isOpen = ref(false)
    let eyesTimer:NodeJS.Timer | null
    
    onMounted(() => {
        eyesTimer = setInterval(() => {
            isOpen.value = true
            setTimeout(() => {
                isOpen.value = false
            },500)
        }, 5000);
    }) 
    onBeforeUnmount(() => {
        clearInterval(Number(eyesTimer))
    })
    return {isOpen}
}

export function useAnimateAndScroll(){
    const cloneBalloonMove = ref(150)
    const skyLeft = ref('50%')
    const scrollViweTranslateY = ref(0)
    let animateElClone:HTMLElement
    const hY = ref(10)
    const screenBottom = ref(90)
    const eyesLeft = ref(90)
    const startScroll = ref(false)
    const scrollViweTranslateX = ref(0)
    const takeingBallon = ref(false)
    const scrollViewHeight = ref('100%') 
    let animateEl:HTMLElement
    let preScrollTop = 0 
    let animate:Animate //人物对象
    let scrollView:HTMLElement
    let jumpScrollHeight = 0 //滚动条到何处时触发跳跃动画
    let downScrollHeight = 0 //滚动条到何处时触发跳跃动画
    let jumpScrollHeight2 = 0 //滚动条到何处时触发跳跃动画
    let downScrollHeight2 = 0 //滚动条到何处时触发跳跃动画
    let goSeaScrollHeight = 0 //第二阶段 入海点
    let goMechanicalHeight = 0 //第三关 出海进入赛博朋克
    let goSeaKey = false
    let goMechanicalKey = false
    let winWidthHelf:number
    let takeBalloonHeight: number
    let canScroll = true
    const seaTop = ref()

    onMounted(() => {
        winWidthHelf = window.innerWidth / 2
        animateEl = document.getElementById('animate') as HTMLElement
        animateElClone = document.getElementsByClassName('animate-clone')[0] as HTMLElement
        scrollView =  document.getElementsByClassName('life-scroll-view')[0] as HTMLElement
        window.addEventListener('scroll', handleScroll)
        animate = new Animate(animateEl)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    function handleScroll(){
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
        //跳跃点 第三关赛博朋克
        goMechanicalHeight = 22792 - animateEl.offsetLeft  - 220 - winWidthHelf + 100

        
       
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
        console.log(scrollHeight)
        scrollViweTranslateX.value =  -scrollHeight / 2
        if(t){
            
            if(scrollHeight > goSeaScrollHeight){
                
                scrollViewHeight.value = '0'      
                goSeaKey = true
                animate.swim('right')
            }
            if(scrollHeight > goMechanicalHeight){
                scrollViewHeight.value = '100%'
                screenBottom.value = 140
                goMechanicalKey = true
                //第二关结束，第三关赛博朋克开始
                window.removeEventListener('scroll', handleSeaViewScroll)
                window.addEventListener('scroll',handleMechanicalViewScroll)
                
            }
            eyesLeft.value = 90
        }else{             
            if(scrollHeight > goSeaScrollHeight){
                animate.swim('left')
            }
            if(scrollHeight < goSeaScrollHeight && goSeaKey){
                goSeaKey = false
                scrollViewHeight.value = '100%'
                screenBottom.value = 90
                //scrollView.classList.add("heightQueit")
                window.removeEventListener('scroll', handleSeaViewScroll)      
                window.addEventListener('scroll', handleScroll)
            }
            if(scrollHeight < goMechanicalHeight  && goMechanicalKey){
                goMechanicalKey = false
                scrollViewHeight.value = '0'
            }
            console.log('sea--')
            eyesLeft.value = 55
        }
        preScrollTop = scrollHeight
    }

    function handleMechanicalViewScroll(){
        
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        const jumpBoxPoint =  27006 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        const jumpDownBoxPOint = 27862 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        const jumpUpBoxLeftPoint = 27908 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        const jumpDownBoxLeftPoint = 26994 - animateEl.offsetLeft  - 220 - winWidthHelf + 100

        const jumpUpBoxPoint2 = 30407 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        const jumpDownBoxPoint2 = 31340 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        //坐气球
        takeBalloonHeight = 34222 - animateEl.offsetLeft  - 220 - winWidthHelf + 100
        const {t} = scorllToward(scrollHeight)     
        console.log('????',scrollHeight) 
        if(canScroll){
            console.log(canScroll,'can')
            scrollViweTranslateX.value =  -scrollHeight / 2
        }
        //坐气球了
        if(t){
            if(scrollHeight > takeBalloonHeight){
                console.log('stop')
                takeingBallon.value = true
                canScroll = false
                window.addEventListener('scroll',handleSkyViewCroll)
                window.removeEventListener('scroll',handleMechanicalViewScroll)
                
            }
            if(scrollHeight < 28230){
                //to do
                if(scrollHeight > jumpDownBoxPOint){
                    animate.jumpDown('right')
                }else if(scrollHeight > jumpBoxPoint){
                    animate.jumpUp('right','150')
                }
            }
            if(scrollHeight > 28230){
                if(scrollHeight > jumpDownBoxPoint2){
                    animate.jumpDown('right')
                }else if(scrollHeight > jumpUpBoxPoint2){
                    animate.jumpUp('right','150')
                }               
            }
            animate.run('right')
            eyesLeft.value = 90
        }else{
            canScroll = true
            takeingBallon.value = false
            //回到sea
            if(scrollHeight < goMechanicalHeight){
                window.addEventListener('scroll', handleSeaViewScroll)
                window.removeEventListener('scroll',handleMechanicalViewScroll)
                scrollViewHeight.value = '0'             
            }else{
                if(scrollHeight < 28230){
                    if(scrollHeight < jumpDownBoxLeftPoint){
                        animate.jumpDown('left')
                        console.log('1')
                    }else if(scrollHeight < jumpUpBoxLeftPoint){
                        animate.jumpUp('left','150')
                    }
                }
                if(scrollHeight > 28230){
                    if(scrollHeight < jumpUpBoxPoint2){
                        animate.jumpDown('left')
                        console.log('1')
                    }else if(scrollHeight < jumpDownBoxPoint2){
                        animate.jumpUp('left','150')
                    }                   
                }
                animate.run('left')
            }
            eyesLeft.value = 55
        } 
    }

    function handleSkyViewCroll(){
        console.log(hY.value)
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        const {t} = scorllToward(scrollHeight)  
        if(t){

            if(hY.value > 4210){
                takeingBallon.value = false
                cloneBalloonMove.value = 900
                animate.win()
                return
            }else{
                animateElClone.style.backgroundPosition =  0 + "px " + 0 + 'px'
                hY.value  = hY.value + 20
                scrollViweTranslateY.value =  hY.value
            }
        }else{
            animate.clearWinStark()
            takeingBallon.value = true
            cloneBalloonMove.value = 150
            animateElClone.style.backgroundPosition =  0 + "px " + -200 + 'px'
            if(scrollViweTranslateY.value > 0){
                hY.value  = hY.value - 20
                scrollViweTranslateY.value =  hY.value
            }
            else if(scrollHeight < takeBalloonHeight){
                //返回机械
                window.addEventListener('scroll',handleMechanicalViewScroll)
                window.removeEventListener('scroll',handleSkyViewCroll)  
            }
            console.log('left,sky')
        }
    }
    return {
        cloneBalloonMove,skyLeft,eyesLeft,startScroll,scrollViweTranslateX,scrollViewHeight,seaTop,takeingBallon,screenBottom,scrollViweTranslateY
    }
}