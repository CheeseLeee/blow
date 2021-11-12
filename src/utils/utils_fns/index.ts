export function getEquipment(){
    const winWidth = window.innerWidth;
    console.log('winWidth',winWidth)
    if(winWidth > 365){
        return true
    }else{
        return false
    }
}


let beforeScrollTop =  document.documentElement.scrollTop || document.body.scrollTop

export function scrollYto(scrollY:any){
    const a = scrollY  / 1000 * (-1060)
    return a
}


export function scorllToward(afterScrollTop:any){
    let t 
    const delta = afterScrollTop - beforeScrollTop
    delta > 0 ? t = true : t = false
    beforeScrollTop = afterScrollTop
    return {
        t
    } //true === down ; false === up
}
//let stepTimerto_left:any = null
let stepTimerto_right:any 
let stepTimerto_left:any

export function animate(animateEle:HTMLElement,towards:any = 'right',countX = 1){  //有待优化~
    if(notMove) return
    if(towards === 'left'){
        if(stepTimerto_left) return
        console.log('执行力吗?')
        clearInterval(stepTimerto_right)
        stepTimerto_right = null
        animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
        stepTimerto_left = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_left)
                stepTimerto_left = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                },200)
            }
        },200)
    }
    if(towards === 'right'){
        if(stepTimerto_right) return
        clearInterval(stepTimerto_left)
        stepTimerto_left = null
        animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
        stepTimerto_right = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_right)
                stepTimerto_right = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                },200)
            }
        },200)
    }
}

let jumpKey = true
let downKey = true
let jumpTimer:any = null
let notMove = false
const timers:any = []

export function animateTowardUp(animateEle:HTMLElement,type:any,scrollTop?:any){
    if(!jumpKey) return
    clearInterval(stepTimerto_right)
     notMove = true
    jumpKey = false
    stepTimerto_right = null
    if(type === 'right'){
        animateEle.style.transform = `translateY(-220px)`
        animateEle.style.backgroundPosition =  -200 * 7 + "px " + 0 + 'px'
        
        timers.push('jumpTimer')
        jumpTimer = setTimeout(() => {
            console.log('定时器1')  
              clearInterval(stepTimerto_left)
            stepTimerto_left = null
            animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
            if(scrollTop > 7880){
                animateTowardDown(animateEle,'right')
                //animateEle.style.transform = `translateY(-0px)` 
            }else{
                animateEle.style.transform = `translateY(-80px)` 
            }
                
            notMove = false
            downKey = true
        },500)
    }
}
export function animateTowardDown(animateEle:HTMLElement,type:any){

    console.log('downkey',downKey)
    if(!downKey) return
    downKey = false
    clearInterval(stepTimerto_right)
    stepTimerto_right = null
    clearInterval(stepTimerto_left)
    stepTimerto_left = null

    clearTimeout(jumpTimer)
    jumpTimer = null
    
    if(type === 'right'){
        animateEle.style.transform = `translateY(-0px)`
        animateEle.style.backgroundPosition =  -200 * 7 + "px " + 0 + 'px'
        setTimeout(() => {            
            animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
            downKey = true
            jumpKey = true
        },300)
    }
}

/*
export function animate(animateEle:HTMLElement,towards:any = 'right',countX = 1){ 
    if(towards === 'left'){
        if(stepTimerto_left) return
        clearInterval(stepTimerto_right)
        stepTimerto_right = null
        animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
        stepTimerto_left = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_left)
                stepTimerto_left = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                },200)
            }
        },200)
    }
    if(towards === 'right'){
        if(stepTimerto_right) return
        clearInterval(stepTimerto_left)
        stepTimerto_left = null
        animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
        stepTimerto_right = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_right)
                stepTimerto_right = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                },200)
            }
        },200)
    }
}*/

